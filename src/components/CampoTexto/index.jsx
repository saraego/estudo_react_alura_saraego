
import './styles.css';
export const CampoTexto = ({label,placeholder}) => {
  return (
    <div className='campo_texto'>
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
