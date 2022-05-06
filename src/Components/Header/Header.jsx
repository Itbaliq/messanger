import { NavLink } from 'react-router-dom';
import logo from './1.jpg';
import s from './Header.module.css';

const Header = (props) =>{
  return (
      <header className={s.header}>
        <img src={logo} className={s.header_logo} alt="logo" />
        <div className={s.loginBlock}>
          {props.isAuth ? 
          <div>
            {props.login} 
            <div>
            <button onClick={props.logout}>Log Out</button>
             </div>
          </div> 
          : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
  );
}

export default Header;
