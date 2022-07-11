import Hero from './components/hero/Hero'
import Info from './components/info/Info'
import Navbar from './components/Navbar'
import s from './styles/app.module.scss'

const App = () => {
   return (
      <div className={s.app}>
         <Navbar />
         <main className={s.main}>
            <Hero />
         </main>
         <Info />
      </div>
   )
}

export default App
