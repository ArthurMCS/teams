import React from 'react'
import { Container, Content, Icon } from './styles'
import Header from '@components/Header'
import HighLight from '@components/Highlight'
import Button from '@components/Button'

export default function NewGroup() {
  return (
    <Container>
        <Header showBackButton />
        <Content>
            <Icon />
            <HighLight
                title='Nova Turma'
                subtitle='crie a turma para adicionar as pessoas'
            />
            <Button title='Criar'/>
        </Content>
    </Container>
  )
}
