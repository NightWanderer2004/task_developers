import useWindowDimensions from '../hooks/useWindowDimentions'
import s from '../styles/navbar.module.scss'
import Button from './UI/Button'

const NavLinks = ({ isMenuActive, clickHandler }) => {
   const { width } = useWindowDimensions()

   return (
      <ul className={`${s.navbarLinks} ${isMenuActive ? s.active : ''}`}>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#info">Услуги</a>
         </li>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#portfolio">Портфолио</a>
         </li>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#steps">Этапы</a>
         </li>
         <li className={s.navbarLink} onClick={clickHandler}>
            <a href="#portfolio">Дизайнеры</a>
         </li>
         {width >= 1024 ? (
            <li>
               <a href="#contact">
                  <Button data-additional="navBtn" onClick={clickHandler}>
                     Заказать
                  </Button>
               </a>
            </li>
         ) : (
            ''
         )}
      </ul>
   )
}

export default NavLinks
