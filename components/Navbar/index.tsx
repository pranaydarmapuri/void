import Link from 'next/link'
import Text from "../ui-elements/typography"
import css from './navbar-stylesheet.module.css'

const Navbar = () => {
  return (
    <>
      <header className={css.desktop_header}>
        <nav>
          <Link href="/" passHref>
            <Text type="heading5" color="primary" _as="a" style={{ fontWeight: 600, textDecoration: 'none' }}>
              <Text color="secondary">V</Text>OID
            </Text>
          </Link>
          <ul className={css.links}>
            <li>
              <Link href="/" passHref ><Text type="caption" _as="a">Home</Text></Link>
            </li>
            <li>
              <Link href="/about" passHref ><Text type="caption" _as="a">About</Text></Link>
            </li>
            <li>
              <Link href="/service" passHref ><Text type="caption" _as="a">Services</Text></Link>
            </li>
            <li>
              <Link href="/contact" passHref ><Text type="caption" _as="a">Contact</Text></Link>
            </li>
          </ul>
        </nav>
      </header>
      <DesktopNavFix />
    </>
  )
}

const DesktopNavFix = () => (
  <div className={css.desktop_header__fix} />
)
export { DesktopNavFix }
export default Navbar