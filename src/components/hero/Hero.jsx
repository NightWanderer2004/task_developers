import s from '../../styles/hero/hero.module.scss'
import Cart from './Cart'
import Tagline from './Tagline'

const Hero = () => {
   return (
      <div className={s.hero}>
         <div className={s.bg}>
            <img src="/assets/img/bg_mobile/left.svg" alt="" />
            <img src="/assets/img/bg/left.svg" alt="" />
            <img src="/assets/img/bg_mobile/right.svg" alt="" />
            {window.innerWidth >= 1024 ? (
               <>
                  <img src="/assets/img/common/sky_sphere.svg" alt="" />
                  <img src="/assets/img/common/violet_wave.svg" alt="" />
               </>
            ) : (
               ''
            )}
         </div>
         <Cart />
         <Tagline />
      </div>
   )
}

export default Hero
