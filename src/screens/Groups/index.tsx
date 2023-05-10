import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Header from '@components/Header';
import HighLight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupGetAll';

export function Groups() {
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    const handleNewGroup = () => {
        navigation.navigate('new')
    }

    const fetchGroups = async () => {
        try {
            const data = await groupsGetAll();
            setGroups(data);
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
    }, []))

    return (
        <Container>
            <Header showBackButton />
            <HighLight title='Turmas' subtitle='jogue com a sua turma' />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard 
                        title={item} 
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={ 
                    () => <ListEmpty message='Que tal cadastrar a primeira turma?'/> 
                }
            />

           <Button title='Criar nova turma' onPress={handleNewGroup}/>     
        </Container>
    );
}
