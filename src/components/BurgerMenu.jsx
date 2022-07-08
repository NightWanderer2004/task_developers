import s from '../styles/burger.module.scss'

const BurgerMenu = props => {
   return (
      <button className={s.burger} {...props}>
         <span className={s.dot}></span>
         <span className={s.dot}></span>
         <span className={s.dot}></span>
      </button>
   )
}

export default BurgerMenu
