import Text from '../../ui-elements/typography'
import Button from '../../ui-elements/button'
import css from './intro-stylesheet.module.css'

const IntroSection = () => {
  return (
    <div className={css.container}>
      <Text type="paragraph" _as="h4" weight="w5" >What we do</Text>
      <div className={css.services}>
        <Text type="heading2" color="primary">Websites</Text>
        <Text type="heading2">Apps</Text>
      </div>
      <div className={css.intro_container}>
        <Text type="heading5" color="muted">
          Your great ideas,<br />Our magnificent designs.
        </Text>
        <Text type="subtitle">
          Stand out from the crowd with a great eye catching websites. We will create a complete
          visual identification, as well as a responsive website and also mobile applications.
        </Text>
        <Button label="get in touch" />
      </div>
    </div>
  )
}

export default IntroSection