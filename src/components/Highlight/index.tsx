import { Container, Subtitle, Title } from './styles';
import React from 'react';

type Props = {
  title: string;
  subtitle: string;
}

export default function HighLight({title, subtitle}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
