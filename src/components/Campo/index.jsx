import PropTypes from 'prop-types';
import './styles.css';

export const Campo = ({ type = 'text', label, placeholder, valor, funcao }) => {
  const caputura = (e) => {
    funcao(e.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor="">{label}</label>
      <input type={type} value={valor} onChange={caputura} placeholder={placeholder} />
    </div>
  );
};

Campo.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  valor: PropTypes.string,
  funcao: PropTypes.func,
};
