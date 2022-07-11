import s from '../../styles/info/info.module.scss'
import Accordeon from '../UI/Accordeon'

const Accordeons = ({ infoBlocks }) => {
   return (
      <div className={s.accordeons}>
         {infoBlocks.map(el => (
            <Accordeon key={el.title} title={el.title} body={el.body} />
         ))}
      </div>
   )
}

export default Accordeons
