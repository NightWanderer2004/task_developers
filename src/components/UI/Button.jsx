import s from '../../styles/UI/button.module.scss'

const Button = ({ children }) => {
   return <button className={s.button}>{children}</button>
}

export default Button
