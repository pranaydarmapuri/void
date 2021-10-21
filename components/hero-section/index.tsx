import HeroIllustration from "../icons/HeroIllustration"
import IntroSection from "./intro-section"
import css from './hero-stylesheet.module.css'
import Text from './../ui-elements/Text'

const HeroSection = () => {
  return (
    <div className={css.hero_container}>
      <IntroSection />
      <HeroIllustration />
      <Text color="secondary" tag="heading5">Hello</Text>
      <Text color="text-secondary" tag="heading5">Hello</Text>
      <Text color="text-primary" tag="heading5">Hello</Text>
      <Text color="primary" tag="heading5">Hello</Text>
      <Text color="text-primary" tag="heading4">Hello</Text>
      <Text color="text-secondary" tag="heading4">Hello</Text>
      <Text color="primary" tag="heading4">Hello</Text>
      <Text color="secondary" tag="heading4">Hello</Text>
      <Text tag="title">Terms & Conditions</Text>
      <Text color="text-secondary" tag="title">Terms & Conditions</Text>
      <Text color="muted" tag="title">Terms & Conditions</Text>
      <Text color="primary" tag="title">Terms & Conditions</Text>
      <Text color="secondary" tag="title">Terms & Conditions</Text>
      <Text tag="title">What we <Text color="primary">do</Text>.</Text>
    </div>
  )
}

export default HeroSection