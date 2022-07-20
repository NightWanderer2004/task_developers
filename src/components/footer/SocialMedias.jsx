import s from '../../styles/footer/social.module.scss'

const SocialMedias = () => {
   return (
      <ul className={s.social}>
         <li>
            <a href="#">
               <img src="/assets/icons/social_media/fb.svg" alt="" />
            </a>
         </li>
         <li>
            <a href="#">
               <img src="/assets/icons/social_media/tg.svg" alt="" />
            </a>
         </li>
         <li>
            <a href="#">
               <img src="/assets/icons/social_media/viber.svg" alt="" />
            </a>
         </li>
         <li>
            <a href="#">
               <img src="/assets/icons/social_media/insta.svg" alt="" />
            </a>
         </li>
         <li>
            <a href="#">
               <img src="/assets/icons/social_media/whatsapp.svg" alt="" />
            </a>
         </li>
      </ul>
   )
}

export default SocialMedias
