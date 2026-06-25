import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Certificates from './components/Certificates'
import AboutSection from './components/AboutSection'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

import CustomCursor from './components/CustomCursor'
import ParticlesBackground from './components/ParticlesBackground'

const App=() => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset:100,
    });
  }, []);

  return (
    <div className='bg-[#111827] min-h-screen cursor-none'>
      <CustomCursor />
      <ParticlesBackground />

      <Header />
      <HeroSection />
      <Education/>
      <Certificates/>
      <AboutSection/>
      <Experience/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App