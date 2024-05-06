import PropTypes from 'prop-types';
import { Colaboradores } from '../Colaborador';
import './styles.css';

export const Time = ({ nome, corPrimaria, corSecundaria, colaborador }) => {
  return (
    colaborador.length > 0 && (
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className='colaborador'>
          {colaborador.map((colab) => (
            <Colaboradores
              key={colab.nome}
              nome={colab.nome}
              cargo={colab.cargo}
              corPrimaria={corPrimaria}
              imagem={colab.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

Time.propTypes = {
  nome: PropTypes.string,
  corPrimaria: PropTypes.string,
  corSecundaria: PropTypes.string,
  colaborador: PropTypes.array,
};
