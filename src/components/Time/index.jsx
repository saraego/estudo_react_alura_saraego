import hexToRgba from 'hex-to-rgba';
import PropTypes from 'prop-types';
import { Colaboradores } from '../Colaborador';
import './styles.css';

export const Time = ({ nome, id, cor, colaborador, aoDeletar, mudarCor }) => {
  return (
    colaborador.length > 0 && (
      <section className="time" style={{ backgroundColor: hexToRgba(cor, '0.4') }}>
        <input value={cor} onChange={(e) => mudarCor(e.target.value, id)} type="color" className="input-cor" />
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <div className="colaborador">
          {colaborador.map((colab) => (
            <Colaboradores
              key={colab.nome}
              nome={colab.nome}
              cargo={colab.cargo}
              id={colab.id}
              corPrimaria={cor}
              imagem={colab.imagem}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

Time.propTypes = {
  nome: PropTypes.string,
  id: PropTypes.string,
  cor: PropTypes.string,
  colaborador: PropTypes.array,
  aoDeletar: PropTypes.func,
  mudarCor: PropTypes.func,
};
