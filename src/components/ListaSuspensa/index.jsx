import PropTypes from 'prop-types';
import './styles.css';
export const ListaSuspensa = ({ label, funcao }) => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Inteligencia Artificial',
    'DevOps',
    'UX & Design',
    'Mobile',
    'Inovação & Gestão',
  ];

  const troca = (e) => {
    console.log(e.target.value);
    funcao(e.target.value);
  };
  return (
    <div className="campo_suspenso">
      <label htmlFor="">{label}</label>
      <select defaultValue={'Escolha um time'} onChange={(e) => troca(e)}>
        <option disabled hidden>
          Escolha um time
        </option>
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

ListaSuspensa.propTypes = {
  label: PropTypes.string,
  valor: PropTypes.string,
  funcao: PropTypes.func,
};
