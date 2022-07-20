import s from '../../styles/footer/contacts.module.scss'

const Contacts = () => {
   return (
      <ul className={s.contacts}>
         <li className={s.person}>
            <img src="/assets/icons/social_media/viber.svg" alt="" />
            <p>Валерия</p>
            <a href="tel:380505859409">+380505859409</a>
         </li>
         <li className={s.person}>
            <img src="/assets/icons/social_media/viber.svg" alt="" />
            <p>Анна</p>
            <a href="tel:380505859409">+380505859409</a>
         </li>
         <li className={s.person}>
            <img src="/assets/icons/social_media/viber.svg" alt="" />
            <p>Валерия</p>
            <a href="tel:380505859409">+380505859409</a>
         </li>
      </ul>
   )
}

export default Contacts
