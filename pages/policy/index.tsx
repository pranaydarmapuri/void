import { NextPage } from "next"
import Text from "../../components/ui-elements/typography"
import { Card } from "../../components/ui-elements/card"
import css from './policy-stylesheet.module.css'
import { useContext } from "react"
import { NavbarContext } from "../../context/NavbarContext"

const Policy: NextPage = () => {

  useContext(NavbarContext).setBG(true)

  return (
    <>
      <Card stretched>
        <Text type="title" >Privacy policy</Text>
      </Card>
      <main>
        <article className={css.para} >
          <Text type="paragraph" color="muted" >What information does VOID collect?</Text>
          <Text type="subtitle" >
            When you join VOID, we ask for information that will help us identify you as a user.
            This information includes your name, email address and password (which is encrypted and secured with a SSL).
          </Text>
        </article>
        <article className={css.para} >
          <Text type="paragraph" color="muted">What do you do with this information?</Text>
          <Text type="subtitle" >
            VOID never provides your personal information to third parties for advertising or promotional purposes.
            Sometimes we will use your email address to send you information regarding projects
            updates, and other news pertaining to VOID. Your email and password are stored in our database, and
            can only be changed once you have logged into the system.
          </Text>
        </article>
        <article className={css.para} >
          <Text type="paragraph" color="muted">Is my information secure?</Text>
          <Text type="subtitle" >
            Your personal information is protected by your password and this information is hosted on a server with
            SSL (Secure Sockets Layer). Never share your password with anyone. VOID will never contact you
            unsolicited to ask for your password.
          </Text>
        </article>
        <article className={css.para} >
          <Text type="paragraph" color="muted">What about cookies?</Text>
          <Text type="subtitle" >
            We do store a cookie on your computer to track you while you&apos;re using VOID. This is known as a user session. The information in the cookie can not be used by third parties to gain access to your account information.
          </Text>
        </article>
      </main>
    </>
  )
}

export default Policy