import useWindowDimensions from '../../hooks/useWindowDimentions'
import s from '../../styles/call/call.module.scss'
import Title from '../UI/Title'
import ContactForm from './ContactForm'

const Call = () => {
   const { width } = useWindowDimensions()
   return (
      <div className={s.call} id="contact">
         <div className={s.callContainer}>
            <Title>Обсудить проект</Title>
            <p className={s.infoText}>
               Расскажите о своих бизнес-целях и мы поможем вам в их достижении
            </p>
            <ContactForm />
            {width <= 640 && (
               <img
                  className={s.img}
                  src="/assets/img/other/call_mobile.svg"
                  alt=""
               />
            )}
            {width >= 1024 && (
               <>
                  <img
                     className={s.img}
                     src="/assets/img/other/call.svg"
                     alt=""
                  />
                  <img
                     className={s.imgWave}
                     src="/assets/img/common/violet_wave.svg"
                     alt=""
                  />
                  <img
                     className={s.imgSphere}
                     src="/assets/img/common/white_sphere.svg"
                     alt=""
                  />
               </>
            )}
         </div>
      </div>
   )
}

export default Call
