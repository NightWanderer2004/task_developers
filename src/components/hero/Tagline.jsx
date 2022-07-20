import s from '../../styles/hero/tagline.module.scss'
import Button from '../UI/Button'

const Tagline = () => {
   return (
      <div className={s.tagline}>
         <h1 className={s.title}>
            Разработка <br /> интернет-магазина <br /> с нуля за неделю
         </h1>
         <p className={s.infoText}>
            Дизайн интернет магазина, элементов микро UX, корзин, личного
            кабинета - от фирменного стиля до пользовательского интерфейса в
            сжатые сроки с командой Virtual Designers
         </p>
         <a href="#contact">
            <Button>Заказать</Button>
         </a>
      </div>
   )
}

export default Tagline
