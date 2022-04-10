import logo from './1.jpg';
import s from './Header.module.css';

const Header = () =>{
  return (
      <header className={s.header}>
        <img src={logo} className={s.header_logo} alt="logo" />
      </header>
  );
}

export default Header;
