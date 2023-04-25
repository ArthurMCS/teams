import Header from '@components/Header';
import { Container } from './style';
import HighLight from '@components/Highlight';

export function Groups() {
    return (
        <Container>
            <Header />
            <HighLight title='Turmas' subtitle='jogue com a sua turma' />
        </Container>
    );
}
