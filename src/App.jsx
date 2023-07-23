import {BrowserRouter} from 'react-router-dom'

import {About, Contact, Experience, ExperienceContent, Hero, Navbar, Tech,Works,StarsCanvas} from './components'
import WorksContent from './components/WorksContent'
import Socials from './components/socials'
import AboutContent from './components/AboutContent'
import HeaderText from './components/HeaderText'
import { slideIn } from './utils/motion'
import {motion} from 'framer-motion'
const App = () => {
 return(
  <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
          <Hero />

       
      </div>
      <About />
      <AboutContent />
      <Experience />
      <ExperienceContent />
      <Tech />
      <Works />
      <WorksContent />
      <Socials />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      
    </div>
  </BrowserRouter>
 )
}

export default App
