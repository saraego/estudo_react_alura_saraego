import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';

function App() {
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
  ];

  return (
    <>
      <Banner />
      <Formulario times={times.map((time) => time.nome)} />
      {times.map((time) => (
        <Time key={time.id} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />
      ))}
    </>
  );
}

export default App;
