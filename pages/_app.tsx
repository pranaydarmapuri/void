import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { NavbarContextProvider } from '../context/NavbarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </NavbarContextProvider>
  )
}
export default MyApp
