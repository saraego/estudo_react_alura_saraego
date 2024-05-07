import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 } from 'uuid';
import { Botao } from '../Botao';
import { Campo } from '../Campo';
import { ListaSuspensa } from '../ListaSuspensa';
import './styles.css';

export const Formulario = ({ times, salvandoColaborador, cadastrarTime }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const [nomeDoTime, setINomeDoTime] = useState('');
  const [corDoTime, setCorDoTime] = useState('');

  const teste = (e) => {
    e.preventDefault();
    salvandoColaborador({
      id: v4(),
      favorito: false,
      nome,
      cargo,
      imagem,
      time,
    });

    setNome('');
    setCargo('');
    setImagem('');
    // setTime('')
  };

  return (
    <section className="formulario">
      <form onSubmit={teste}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          label={'Nome'}
          placeholder={'Digite o seu nome'}
          valor={nome}
          funcao={(valor) => setNome(valor)}
        />
        <Campo
          label={'Cargo'}
          placeholder={'Digite seu cargo'}
          valor={cargo}
          funcao={(valor) => setCargo(valor)}
        />
        <Campo
          label={'Imagem'}
          placeholder={'Ex: https://github.com/nome.png'}
          valor={imagem}
          funcao={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label={'Time'}
          times={times}
          valor={time}
          funcao={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrarTime({ id: v4(), nome: nomeDoTime, cor: corDoTime });
        }}
      >
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          label={'Time'}
          placeholder={'Digite o nome do time'}
          valor={nomeDoTime}
          funcao={(valor) => setINomeDoTime(valor)}
        />
        <Campo
          label={'Cor'}
          type="color"
          placeholder={'Digite a cor'}
          valor={corDoTime}
          funcao={(valor) => setCorDoTime(valor)}
        />

        <Botao>Criar novo time</Botao>
      </form>
    </section>
  );
};

Formulario.propTypes = {
  times: PropTypes.array,
  salvandoColaborador: PropTypes.func,
  cadastrarTime: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
