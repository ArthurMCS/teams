import React from 'react'
import { Container, Form } from './styles'
import Header from '@components/Header'
import HighLight from '@components/Highlight'
import ButtonIcon from '@components/ButtonIcon'
import Input from '@components/Input'

export default function Players() {
  return (
    <Container>
        <Header showBackButton />

        <HighLight 
            title="Nome da turma"
            subtitle="adicione a galera e separe os times"
        />
        <Form>
            <Input 
              placeholder="Nome da pessoa"
              autoCorrect={false}

            />
            <ButtonIcon icon="add" />
        </Form>
    </Container>
  )
}
