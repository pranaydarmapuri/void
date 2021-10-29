import { NextPage } from "next"
import css from './error-page.module.css'
import Text from './../../components/ui-elements/typography'

const ErrorPage: NextPage = () => {
  return (
    <div className={css.container}>
      <Text type="title" color="text-secondary">404<Text color="muted"> | </Text>Page not found</Text>
    </div>
  )
}

export default ErrorPage