import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa';
import './styles.css';
export const Formulario = ({ label, placeholder }) => {
  return (
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label={'Nome'} placeholder={'Digite seu nome'} />
        <CampoTexto label={'Cargo'} placeholder={'Digite seu cargo'} />
        <CampoTexto label={'Imagem'} placeholder={'Ex: https://github.com/nome.png'} />
        <ListaSuspensa label={'Time'} />
        <Botao />
      </form>
    </section>
  );
};
