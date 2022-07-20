import s from '../../styles/footer/footer.module.scss'
import Contacts from './Contacts'
import SocialMedias from './SocialMedias'

const Footer = () => {
   return (
      <footer className={s.footer}>
         <div className={s.footerContainer}>
            <img
               className={s.logo}
               src="/assets/icons/logo.svg"
               alt="DEVELOPERS"
            />
            <Contacts />
            <SocialMedias />
            <a href="mailto:hr@d-vs.com" className={s.email}>
               hr@d-vs.com
            </a>
         </div>
         <p className={s.cpr}>Developers 2018-2021 All rights reserved</p>
      </footer>
   )
}

export default Footer
