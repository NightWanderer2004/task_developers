import s from '../../styles/UI/button.module.scss'

const Button = props => {
   return (
      <button {...props} className={s.button}>
         {props.children}
      </button>
   )
}

export default Button
