import { useState } from 'react';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const times = [
    {
      id: 1,
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      id: 2,
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      id: 3,
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      id: 4,
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      id: 5,
      nome: 'UX & Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      id: 6,
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      id: 7,
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ];
  const funcao = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
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
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaborador={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
