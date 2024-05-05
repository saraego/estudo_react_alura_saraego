import Logo from '../../assets/banner.png';
import './styles.css';
export const Banner = () => {
  return (
    <header className='banner'>
      <img src={Logo} alt="Banner inicial" />
    </header>
  );
};
