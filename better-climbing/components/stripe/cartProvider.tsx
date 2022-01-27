import { CartProvider } from 'use-shopping-cart/react'
import { STRIPE_CONFIG } from '../../config/stripe'

const Cart = ({ children }: { children: React.ReactNode }) => (
  <CartProvider
    cartMode='checkout-session'
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
    currency={STRIPE_CONFIG.CURRENCY}
    // successUrl='/'
    // cancelUrl='/cart'
    // allowedCountries={['US', 'GB', 'CA']}
  >
    {children}
  </CartProvider>
)

export default Cart
