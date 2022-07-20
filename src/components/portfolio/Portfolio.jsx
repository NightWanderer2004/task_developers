import useWindowDimensions from '../../hooks/useWindowDimentions'
import s from '../../styles/portfolio/portfolio.module.scss'
import ImageBlock from '../UI/ImageBlock'
import Slider from '../UI/Slider'
import Title from '../UI/Title'

const Portfolio = () => {
   const { width } = useWindowDimensions()
   const portfolioImages = [
      {
         image: 'carts',
         title: 'для оптовых покупок',
      },
      {
         image: 'haircut',
         title: 'для парикмахеров',
      },
      {
         image: 'cakes',
         title: 'для кондитеров',
      },
      {
         image: 'flowers',
         title: 'для флористов',
      },
      {
         image: 'beauty',
         title: 'для визажистов',
      },
      {
         image: 'paint',
         title: 'для художников',
      },
   ]

   return (
      <div className={s.portfolio} id="portfolio">
         <div className={s.portfolioContainer}>
            {width >= 1024 && (
               <>
                  <img
                     className={s.bgWave}
                     src="/assets/img/common/violet_wave.svg"
                     alt=""
                  />
                  <img
                     className={s.bgSphere}
                     src="/assets/img/common/white_sphere.svg"
                     alt=""
                  />
               </>
            )}
            <Title>Примеры онлайн-магазинов</Title>
            {width >= 768 ? (
               <div className={s.examples}>
                  {portfolioImages.map(el => (
                     <ImageBlock key={el.image} el={el} />
                  ))}
               </div>
            ) : (
               <Slider data={portfolioImages} isCol />
            )}
         </div>
      </div>
   )
}

export default Portfolio
