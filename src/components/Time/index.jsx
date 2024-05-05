import PropTypes from 'prop-types';
import './styles.css';
export const Time = ({ nome, corPrimaria, corSecundaria }) => {
  return (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div>
        <p>nome</p>
        <p>cargo</p>
      </div>
    </section>
  );
};

Time.propTypes = {
  nome: PropTypes.string,
  corPrimaria: PropTypes.string,
  corSecundaria: PropTypes.string,
};
