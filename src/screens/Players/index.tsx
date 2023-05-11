import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import Header from '@components/Header';
import HighLight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import Input from '@components/Input';
import Filter from '@components/Filter';
import { Alert, FlatList } from 'react-native';
import PlayerCard from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';

import { AppError } from '@utils/AppError';

import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeams';
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';


type RouteParams = {
  group: string;
}

export default function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const  route = useRoute();

  const { group } = route.params as RouteParams;

  const handleAdd = async () => {
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
    }

    const newPLayer = {
      name: newPlayerName,
      team,
    }

    try {
      
      await playerAddByGroup(newPLayer, group);
      setNewPlayerName('');
      fetchPlayersByTeam();

    } catch (error) {

      if(error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas pelo time selecionado');
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
        <Header showBackButton />

        <HighLight 
            title={group}
            subtitle="adicione a galera e separe os times"
        />
        <Form>
            <Input 
              placeholder="Nome da pessoa"
              autoCorrect={false}
              onChangeText={setNewPlayerName}
              value={newPlayerName}
            />
            <ButtonIcon icon="add" onPress={handleAdd}/>
        </Form>

        <HeaderList>
          <FlatList 
            data={['time A', 'time B', 'time C']}
            keyExtractor={item => item}
            renderItem={({ item } ) => (
              <Filter 
                title={item}
                isActive={ item === team}
                onPress={() => setTeam(item)}
              />
            )}
            horizontal
          />
          <NumbersOfPlayers>
            {players.length}
          </NumbersOfPlayers>
        </HeaderList>


        <FlatList 
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard 
              name={item.name}
              onRemove={() => {}}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty 
              message="Não há pessoas nesse time"
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]}
        />
        <Button
          title="Remover item"
          type="SECONDARY"
        />    
    </Container>
  )
}
