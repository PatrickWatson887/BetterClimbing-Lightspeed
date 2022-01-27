import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DebugCart } from 'use-shopping-cart/react'
import { Products } from '../components/sections/products'
import { getLayout } from '../layouts/layout'
import { NextPageWithLayout } from '../types/pages'

const CartPage: NextPageWithLayout = () => {
  const { query } = useRouter()

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    if ('success' in query) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if ('canceled' in query) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NextSeo title='Cart | Better Climbing' />
      <Products />
    </>
  )
}

CartPage.getLayout = getLayout

export default CartPage
