import type { NextPage } from 'next'
import { useContext } from 'react'
import AboutSection from '../components/about-section'
import HeroSection from '../components/hero-section'
import ProjectSection from '../components/projects-section'
import { NavbarContext } from '../context/NavbarContext'

const Home: NextPage = () => {

  useContext(NavbarContext).setBG(false)

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </>
  )
}

export default Home
