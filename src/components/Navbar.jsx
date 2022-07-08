import { useState } from 'react'
import s from '../styles/navbar.module.scss'
import BurgerMenu from './BurgerMenu'
import NavLinks from './NavLinks'

const Navbar = () => {
   const [isMenuActive, setIsMenuActive] = useState(false)
   const toggleMenu = () => setIsMenuActive(!isMenuActive)

   return (
      <header className={s.navbar}>
         <nav className={s.navbarContent}>
            <img
               className={s.logo}
               src="/assets/icons/logo.svg"
               alt="Developers"
            />
            <BurgerMenu onClick={toggleMenu} />
            <NavLinks isMenuActive={isMenuActive} clickHandler={toggleMenu} />
         </nav>
      </header>
   )
}

export default Navbar
