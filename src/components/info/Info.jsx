import s from '../../styles/info/info.module.scss'
import Title from '../UI/Title'
import Accordeons from './Accordeons'

const Info = () => {
   const infoBlocks = [
      {
         title: 'Дизайн портала',
         body: 'Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.',
      },
      {
         title: 'Дизайн адаптивной мобильной версии',
         body: 'Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана.',
      },
      {
         title: 'Дизайн десктопной версии',
         body: 'Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.',
      },
      {
         title: 'Пользовательский интерфейс',
         body: 'Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя.',
      },
      {
         title: 'Микро UX',
         body: 'Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения.',
      },
   ]
   return (
      <div className={s.info} id="info">
         <div className={s.infoContainer}>
            <img className={s.bag} src="/assets/img/other/bag.svg" alt="" />
            <Title>
               Что входит в услугу по созданию дизайна интернет-магазина?
            </Title>
            <Accordeons infoBlocks={infoBlocks} />
         </div>
      </div>
   )
}

export default Info
