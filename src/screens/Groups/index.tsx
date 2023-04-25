import Header from '@components/Header';
import { Container } from './style';
import HighLight from '@components/Highlight';
import GroupCard from '@components/GroupCard';

export function Groups() {
    return (
        <Container>
            <Header />
            <HighLight title='Turmas' subtitle='jogue com a sua turma' />
            <GroupCard title='ndfjnsvjnjdfn' />
        </Container>
    );
}
