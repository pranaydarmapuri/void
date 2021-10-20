import css from './intro-stylesheet.module.css'

const IntroSection = () => {
  return (
    <div className={css.container}>
      <h3>What we do</h3>
      <ul>
        <li><h1>Websites</h1></li>
        <li><h1>Apps</h1></li>
      </ul>
      <div>
        <p>
          Stand out from the crowd with a great eye catching websites. We will create a complete
          visual identification, as well as a responsive website and also mobile applications.
        </p>
      </div>
    </div>
  )
}

export default IntroSection