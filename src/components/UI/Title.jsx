import s from '../../styles/UI/title.module.scss'

const Title = ({ children }) => {
   return <h2 className={s.title}>{children}</h2>
}

export default Title
