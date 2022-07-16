import s from '../../styles/moreInfo/infoImg.module.scss'

const InfoImg = () => {
   return (
      <div className={s.infoImgContainer}>
         <img className={s.infoImg} src="/assets/img/other/info.svg" alt="" />
         <div className={s.infoImgParticles}>
            <img
               data-positionimg="1"
               src="/assets/img/common/sky_sphere.svg"
               alt=""
            />
            <img
               data-positionimg="2"
               src="/assets/img/common/violet_sphere.svg"
               alt=""
            />
            <img
               data-positionimg="3"
               src="/assets/img/common/clocks.svg"
               alt=""
            />
            <img
               data-positionimg="4"
               src="/assets/img/common/violet_wave.svg"
               alt=""
            />
            <img
               data-positionimg="5"
               src="/assets/img/common/blured_cylinder.svg"
               alt=""
            />
            <img
               data-positionimg="6"
               src="/assets/img/common/blue_triangle.svg"
               alt=""
            />
         </div>
      </div>
   )
}

export default InfoImg
