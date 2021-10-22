import Link from 'next/link'
import Text from "../ui-elements/Text"
import css from './navbar-stylesheet.module.css'

const Navbar = () => {
  return (
    <header className={css.desktop_header}>
      <nav>
        <Text type="heading5" color="primary" style={{ fontWeight: 600 }}><Text color="secondary">V</Text>OID</Text>
        <ul>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/about" ><a>About</a></Link>
          </li>
          <li>
            <Link href="/service" ><a>Services</a></Link>
          </li>
          <li>
            <Link href="/contact" ><a>Contact</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar