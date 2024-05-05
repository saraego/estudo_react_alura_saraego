import PropTypes from 'prop-types';
import './styles.css';
export const ListaSuspensa = ({ label,times, funcao }) => {

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
  times: PropTypes.array,
  valor: PropTypes.string,
  funcao: PropTypes.func,
};
