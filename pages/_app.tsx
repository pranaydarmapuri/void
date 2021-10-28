import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { NavbarContextProvider } from '../context/NavbarContext'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NavbarContextProvider>
  )
}
export default MyApp
