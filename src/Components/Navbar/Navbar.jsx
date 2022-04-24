
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const activeLink = ({isActive}) => isActive ? s.activeLink : s.item; 
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className = { activeLink } >Profile</NavLink >
      </div>
      <div className={s.item}>
        <NavLink  to='/dialogs' className = { activeLink } >Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to='/users' className = { activeLink } >Users</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
