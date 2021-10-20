import HeroIllustration from "../icons/HeroIllustration"
import IntroSection from "./intro-section"
import css from './hero-stylesheet.module.css'
import Text from './../ui-elements/Text'

const HeroSection = () => {
  return (
    <div className={css.hero_container}>
      <IntroSection />
      <HeroIllustration />
      <Text.title>Terms & Conditions</Text.title>
      <Text.heading>Terms & Conditions</Text.heading>
      <Text.heading2>Terms & Conditions</Text.heading2>
      <Text.heading3>Terms & Conditions</Text.heading3>
      <Text.heading4>Terms & Conditions</Text.heading4>
      <Text.heading5>Terms & Conditions</Text.heading5>
      <Text.heading2>what we <Text.primary>do</Text.primary>.</Text.heading2>
      <Text.heading3>what we <Text.secondary>do</Text.secondary>.</Text.heading3>
    </div>
  )
}

export default HeroSection