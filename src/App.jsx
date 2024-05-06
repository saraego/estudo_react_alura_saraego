import { useState } from 'react';
import { v4 } from 'uuid';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [times, setTimes] = useState([
    {
      id: v4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: v4(),
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      id: v4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: v4(),
      nome: 'DevOps',
      cor: '#E06B69',
    },
    {
      id: v4(),
      nome: 'UX & Design',
      cor: '#DB6EBF',
    },
    {
      id: v4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: v4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ]);

  const funcao = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };
  const deletaColaborador = (id) => {
    console.log(id);
   console.log(colaboradores);
   setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };
  return (
    <>
      <div>
        <Banner />
        <Formulario
          times={times.map((time) => time.nome)}
          salvandoColaborador={(colaborador) => funcao(colaborador)}
        />
        {times.map((time) => (
          <Time
            key={time.id}
            nome={time.nome}
            cor={time.cor}
            id={time.id}
            // corSecundaria={time.corSecundaria}
            colaborador={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
            aoDeletar={deletaColaborador}
            mudarCor={mudarCorDoTime}
          />
        ))}
      </div>
    </>
  );
}

export default App;
