/* eslint-disable @next/next/link-passhref */

import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { ComponentProps, useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavbarContext'
import useIsVisible from '../../hooks/useIsVisible'
import Text from "../ui-elements/typography"
import css from './navbar-stylesheet.module.css'

const Navbar = () => {

  const navbarRef = useRef<null | HTMLDivElement>(null)

  const addBG = !useIsVisible(navbarRef)

  const { isBG } = useContext(NavbarContext)

  const router = useRouter()

  return (
    <>
      <header className={`${css.desktop_header} ${(isBG || addBG) && css.desktop_header_with_bg}`}>
        <nav>
          <Link href="/">
            <Text type="heading5" color="primary" style={{ fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}>
              <Text color="secondary">V</Text>OID
            </Text>
          </Link>
          <ul className={css.links}>
            <li>
              <Text type="caption" color={router.pathname == '/' ? 'primary' : 'text-secondary'}>
                <Link href="/">Home</Link>
              </Text>
            </li>
            <li>
              <Text type="caption" color={router.pathname == '/about' ? 'primary' : 'text-secondary'}>
                <Link href="/about" >About</Link>
              </Text>
            </li>
            <li>
              <Text type="caption" color={router.pathname == '/services' ? 'primary' : 'text-secondary'}>
                <Link href="/services" >Services</Link>
              </Text>
            </li>
            <li>
              <Text type="caption" color={router.pathname == '/contact' ? 'primary' : 'text-secondary'}>
                <Link href="/contact" >Contact</Link>
              </Text>
            </li>
          </ul>
        </nav>
      </header>
      <div ref={navbarRef} style={{ width: '100%' }} />
      <DesktopNavFix />
    </>
  )
}

const DesktopNavFix = ({ className, ...rest }: ComponentProps<'div'>) => (
  <div className={`${css.desktop_header__fix} ${className}`} {...rest} />
)
export { DesktopNavFix }
export default Navbar