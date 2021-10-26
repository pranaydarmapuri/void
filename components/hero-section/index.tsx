import HeroIllustration from "../icons/HeroIllustration"
import IntroSection from "./intro-section"
import css from './hero-stylesheet.module.css'

const HeroSection = () => {
  return (
    <div className={css.hero_container}>
      <IntroSection />
      <HeroIllustration />
    </div>
  )
}

export default HeroSection