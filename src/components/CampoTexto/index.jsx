import PropTypes from 'prop-types';
import './styles.css';
export const CampoTexto = ({ label, placeholder, valor, funcao }) => {
  const caputura = (e) => {
    console.log(e.target.value);
    funcao(e.target.value);
  };
  return (
    <div className="campo_texto">
      <label htmlFor="">{label}</label>
      <input onChange={(e) => caputura(e)} type="text" placeholder={placeholder} value={valor} />
    </div>
  );
};

CampoTexto.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  valor: PropTypes.string,
  funcao: PropTypes.func,
};
