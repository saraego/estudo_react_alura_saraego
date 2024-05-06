import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import './styles.css';
export const Colaboradores = ({ nome, cargo, imagem, id, corPrimaria, aoDeletar }) => {
  return (
    <div className="colaboradores">
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(id)} />
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={'https://github.com/saraego.png'} alt={nome} />
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
  id: PropTypes.string,
  cargo: PropTypes.string,
  imagem: PropTypes.string,
  corPrimaria: PropTypes.string,
  aoDeletar: PropTypes.func,
};
