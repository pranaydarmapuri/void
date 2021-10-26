import Button from "../ui-elements/button"
import Card from "../ui-elements/card"
import Text from "../ui-elements/typography"
import css from './about-section.module.css'

const AboutSection = () => {
  return (
    <Card stretched className={css.container}>
      <Text type="heading4">About us</Text>
      <Text type="paragraph">
        We&apos;re a team of ✌ <Text color="primary">dedicated engineers</Text> who are enthusiastic about designing and
        developing a quality product on the latest technology and make <Text color="primary">your dreams come true</Text>.
      </Text>
      <div>
        <Button label="read more" />
      </div>
    </Card>
  )
}

export default AboutSection