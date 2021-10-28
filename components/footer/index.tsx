import Link from 'next/link'
import { Card } from "../ui-elements/card"
import Text from "../ui-elements/typography"
import css from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <Card stretched className={css.footer_card}>
        <div>
          <Text type="heading5" color="primary" style={{ fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}>
            <Text color="secondary">V</Text>OID
          </Text>
        </div>
        <div>
          <Text type="paragraph" _as="a" href="#" target="_blank">info@void.com</Text>
          <Text _as="address" style={{ fontSize: '14px' }} color="muted">
            Earth, the Solar System, Oort Cloud, Local Fluff<br />
            Local Bubble, Orion Arm, Milky Way Galaxy, Local Group<br />
            Virgo Super cluster, Laniard Super cluster, Universe.
          </Text>
        </div>
      </Card>
      <div className={css.terms_section}>
        <Link href="/terms" passHref><Text _as="a" color="muted" type="caption">Terms and conditions</Text></Link>
        <Link href="/policy" passHref><Text _as="a" color="muted" type="caption">Privacy policy</Text></Link>
      </div>
    </footer>
  )
}

export default Footer