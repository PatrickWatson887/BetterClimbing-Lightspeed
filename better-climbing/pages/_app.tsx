import { DefaultSeo } from 'next-seo'
import 'tailwindcss/tailwind.css'
import Cart from '../components/stripe/cartProvider'
import SEO from '../config/seo'
import '../config/tailwind.custom.css'
import { AppPropsWithLayout } from '../types/pages'

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  if (process.env.NODE_ENV === 'development' && !Component.getLayout) {
    console.warn('No layout provided for this page!')
  }

  return getLayout(
    <>
      <DefaultSeo {...SEO} />
      <Cart>
        <Component {...pageProps} />
      </Cart>
    </>
  )
}

export default App
