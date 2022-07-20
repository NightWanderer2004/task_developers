import s from '../../styles/UI/formInput.module.scss'

const FormInput = props => {
   return (
      <div className={s.inuptGroup}>
         <input
            {...props}
            className={s.input}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
         />
         {props.errors && <p className={s.errorMessage}>{props.errors}</p>}
      </div>
   )
}

export default FormInput
