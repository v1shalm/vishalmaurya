import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import  { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(


    < >
    <ThemeProvider attribute="class"  enableSystem={true}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      </ThemeProvider>
      </>
  )
}

export default MyApp;
