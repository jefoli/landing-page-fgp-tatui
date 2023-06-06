import { SectionContainer } from '../../Components/SectionContainer';
import { AiFillWarning } from 'react-icons/ai';

export const NotFound = () => {
  return (
    <SectionContainer>
      <AiFillWarning size={150} />
      <h1>ERROR 404 - PÁGINA NÃO ENCONTRADA</h1>
      <p>Desculpe-nos, mas a página requisitada não pode ser encontrada.</p>
      <p>
        <a href="/">Clique aqui para retornar</a>
      </p>
    </SectionContainer>
  );
};
