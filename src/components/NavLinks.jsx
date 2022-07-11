import useWindowDimensions from '../hooks/useWindowDimentions'
import s from '../styles/navbar.module.scss'
import Button from './UI/Button'

const NavLinks = ({ isMenuActive, clickHandler }) => {
   const { width } = useWindowDimensions()

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
         {width >= 1024 ? (
            <li>
               <Button data-additional="navBtn" onClick={clickHandler}>
                  Заказать
               </Button>
            </li>
         ) : (
            ''
         )}
      </ul>
   )
}

export default NavLinks
