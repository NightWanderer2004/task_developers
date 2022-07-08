import s from '../styles/navbar.module.scss'

const NavLinks = ({ isMenuActive, clickHandler }) => {
   return (
      <ul className={`${s.navbarLinks} ${isMenuActive ? s.active : ''}`}>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#">Услуги</a>
         </li>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#">Портфолио</a>
         </li>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#">Этапы</a>
         </li>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#">Дизайнеры</a>
         </li>
      </ul>
   )
}

export default NavLinks
