import { useState } from 'react'
import s from '../../styles/UI/accordeon.module.scss'

const Accordeon = ({ title, body }) => {
   const [isAccordeonActive, setIsAccordeonActive] = useState(false)

   return (
      <div
         className={s.accordeon}
         onClick={() => setIsAccordeonActive(!isAccordeonActive)}
      >
         <div className={s.container}>
            <div className={s.status} data-active={isAccordeonActive}></div>
            <p className={s.title}>{title}</p>
            <button className={s.arrow} data-active={isAccordeonActive}>
               <img src="/assets/icons/arrow_down.svg" alt="\_/" />
            </button>
         </div>
         <p
            className={s.body}
            data-active={isAccordeonActive}
            onClick={e => e.stopPropagation()}
         >
            {body}
         </p>
      </div>
   )
}

export default Accordeon
