import React, { useState } from 'react'
import { Container, Content, Icon } from './styles'
import Header from '@components/Header'
import HighLight from '@components/Highlight'
import Button from '@components/Button'
import Input from '@components/Input'
import { useNavigation } from '@react-navigation/native'

export default function NewGroup() {
  const [ group, setGroup ] = useState('')

  const navigation = useNavigation()

  const handleNew = () => {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
        <Header showBackButton />
        <Content>
            <Icon />
            <HighLight
                title='Nova Turma'
                subtitle='crie a turma para adicionar as pessoas'
            />

            <Input
              placeholder="Nome da Turma"
              onChangeText={setGroup}
            />

            <Button 
              title='Criar'
              style={{ marginTop: 20 }}
              onPress={ handleNew }
            />
        </Content>
    </Container>
  )
}
