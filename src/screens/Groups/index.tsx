import Header from '@components/Header';
import { Container } from './style';
import HighLight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
    const [groups, setGroups] = useState<string[]>(['Galera do COD', 'Fifinha'])

    return (
        <Container>
            <Header />
            <HighLight title='Turmas' subtitle='jogue com a sua turma' />
            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard 
                        title={item} 
                    />
                )}
            />
        </Container>
    );
}
