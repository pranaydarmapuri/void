import HeroIllustration from "../icons/HeroIllustration"
import IntroSection from "./intro-section"
import css from './hero-stylesheet.module.css'
import Text from './../ui-elements/Text'

const HeroSection = () => {
  return (
    <div className={css.hero_container}>
      <IntroSection />
      <HeroIllustration />
      <Text type="title">Terms & Conditions</Text>
      <Text type="paragraph">What we <Text color="secondary">do</Text>.</Text>
      <Text type="subtitle">What we <Text color="primary">do</Text>.</Text>
      <Text type="caption">What we <Text color='muted'>do</Text>.</Text>
      <Text type="caption">What we <Text color="text-secondary">do</Text>.</Text>
      <Text color="muted" type="caption">What we do.</Text>
    </div>
  )
}

export default HeroSection