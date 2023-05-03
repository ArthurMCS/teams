import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps
}

export default function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container>
        <Icon icon={icon} type={type} />
    </Container>
  )
}
