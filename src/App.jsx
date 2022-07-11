import Hero from './components/hero/Hero'
import Info from './components/info/Info'
import Navbar from './components/Navbar'
import Steps from './components/steps/Steps'
import Portfolio from './components/portfolio/Portfolio'
import s from './styles/app.module.scss'

const App = () => {
   return (
      <div className={s.app}>
         <Navbar />
         <div className={s.main}>
            <Hero />
         </div>
         <Info />
         <div className={s.main}>
            <Steps />
         </div>
         <Portfolio />
      </div>
   )
}

export default App
