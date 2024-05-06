import PropTypes from 'prop-types';
import './styles.css';
export const Colaboradores = ({ nome, cargo, imagem, corPrimaria }) => {
  return (
    <div className="colaboradores">

      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

Colaboradores.propTypes = {
  nome: PropTypes.string,
  cargo: PropTypes.string,
  imagem: PropTypes.string,
  corPrimaria: PropTypes.string,
};
