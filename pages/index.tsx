import type { NextPage } from 'next'
import AboutSection from '../components/about-section'
import HeroSection from '../components/hero-section'
import { DesktopNavFix } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}

export default Home
