import s from '../../styles/UI/imageBlock.module.scss'

const ImageBlock = el => {
   return (
      <div className={s.infoImage}>
         <div className={s.backdrop}>
            <h3 className={s.titleImage}>Онлайн-магазин</h3>
            <p>{el.el.title}</p>
         </div>
         <img
            loading="lazy"
            src={`/assets/img/portfolio/${el.el.image}.png`}
            alt={el.el.image}
         />
      </div>
   )
}

export default ImageBlock
