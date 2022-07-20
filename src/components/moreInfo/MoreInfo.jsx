import useWindowDimensions from '../../hooks/useWindowDimentions'
import s from '../../styles/moreInfo/moreInfo.module.scss'
import Button from '../UI/Button'
import Title from '../UI/Title'
import InfoImg from './InfoImg'

const MoreInfo = () => {
   const { width } = useWindowDimensions()

   return (
      <div className={s.moreInfo}>
         {width < 640 && (
            <>
               <Title>Необходимо больше информации?</Title>
               <InfoImg />
            </>
         )}
         <div className={s.infoBlock}>
            {width >= 640 && <Title>Необходимо больше информации?</Title>}
            <p className={s.infoText}>
               Если Вы владелец онлайн-магазина или только начинаете свой путь в
               электронной коммерции и вам нужен уникальный дизайн онлайн
               магазина для стартапа, обратитесь к нашему веб дизайнеру. За
               выгодную цену и короткий период времени, он поможет
               визуализировать ваш веб-проект.
            </p>
            <a href="#contact"
               <Button>оставить заявку</Button>
            </a>
         </div>
         {width >= 640 && <InfoImg />}
      </div>
   )
}

export default MoreInfo
