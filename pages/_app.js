import '../styles/globals.css'
import { MobileNav } from '../widgets/MobileNav'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Component {...pageProps} />
    <MobileNav/>
  </div>
  )
}

export default MyApp
