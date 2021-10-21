import HeroIllustration from "../icons/HeroIllustration"
import IntroSection from "./intro-section"
import css from './hero-stylesheet.module.css'
import Text from './../ui-elements/Text'

const HeroSection = () => {
  return (
    <div className={css.hero_container}>
      <IntroSection />
      <HeroIllustration />
      <Text color="text-secondary" tag="heading5">Hello</Text>
      <Text color="text-primary" tag="heading5">Hello</Text>
    </div>
  )
}

export default HeroSection