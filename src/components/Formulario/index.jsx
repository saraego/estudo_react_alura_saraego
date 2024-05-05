import PropTypes from 'prop-types';
import { useState } from 'react';
import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa';
import './styles.css';

export const Formulario = ({ times }) => {
  
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const teste = (e) => {
    e.preventDefault();
    const fucionario = {
      nome,
      cargo,
      imagem,
      time,
    };

    setNome('');
    setCargo('');
    setImagem('');
    // setTime('')
    console.log(fucionario);
  };

  return (
    <section className="formulario">
      <form onSubmit={teste}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label={'Nome'}
          placeholder={'Digite o seu nome'}
          valor={nome}
          funcao={(valor) => setNome(valor)}
        />
        <CampoTexto
          label={'Cargo'}
          placeholder={'Digite seu cargo'}
          valor={cargo}
          funcao={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label={'Imagem'}
          placeholder={'Ex: https://github.com/nome.png'}
          valor={imagem}
          funcao={(valor) => setImagem(valor)}
        />
        <ListaSuspensa label={'Time'} times={times} valor={time} funcao={(valor) => setTime(valor)} />
        <Botao />
      </form>
    </section>
  );
};

Formulario.propTypes = {
  times: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
