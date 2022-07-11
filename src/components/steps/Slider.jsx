import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import s from '../../styles/steps/slides.module.scss'

const Slider = ({ stepsBlocks }) => {
   const prevRef = useRef(null)
   const nextRef = useRef(null)
   return (
      <Swiper
         onInit={swiper => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
         }}
         modules={[Navigation]}
         spaceBetween={64}
         slidesPerView={'auto'}
         autoHeight
         centeredSlides
         className={s.slider}
      >
         {stepsBlocks.map(el => (
            <SwiperSlide key={el.title} className={s.slide}>
               <div className={s.info}>
                  <h3 className={s.title}>{el.title}</h3>
                  <p className={s.body}>{el.body}</p>
               </div>
               <img src={`/assets/img/steps/${el.icon}.svg`} alt="" />
            </SwiperSlide>
         ))}
         <div className={s.navigation}>
            <button ref={prevRef} className={s.arrowLeft}>
               <img src="/assets/icons/arrow_left.svg" alt="" />
            </button>
            <button ref={nextRef} className={s.arrowRight}>
               <img src="/assets/icons/arrow_right.svg" alt="" />
            </button>
         </div>
      </Swiper>
   )
}

export default Slider
