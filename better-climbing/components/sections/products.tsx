import React from 'react'
import { CartState } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart/react'
import { useState, useEffect } from 'react'
import { fetchPostJSON } from '../../utils/apiHelpers'
import { CheckoutItem } from '../cards/checkoutItem'
import Link from 'next/link'
import itemService from '../../services/itemService'
import { ItemDb, Product } from '../../types/features'

export const Products = () => {
  const [loading, setLoading] = useState(false)
  const [cartEmpty, setCartEmpty] = useState(true)
  const [product, setProduct] = useState<Product[]>([])
  const { formattedTotalPrice, cartCount, cartDetails, redirectToCheckout } =
    useShoppingCart<CartState>()

  const cart = Object.values(cartDetails)

  useEffect(() => {
    setCartEmpty(!cartCount)
    fetchCoachesItems()
  }, [cartCount])
  
  const fetchCoachesItems = () => {
    itemService.getAllItems()
        .then(async (response: any) => {
          console.log(response)
          var itemsParsed: Product[] = []
          response.data.forEach((item: ItemDb) => {
            var currentItem: Product = {
              id: item.id.toString(),
              name: item.title,
              description: item.description,
              price: item.price * 100,
              spaces: item.spaces,
              spacesFilled: item.spaces_filled,
              currency: 'GBP'
            }
            itemsParsed.push(currentItem)
          })
          setProduct(itemsParsed)
        })
        .catch((e: Error) => {
          console.log(e)
        })
    }
  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()
    setLoading(true)

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      {cart: cartDetails, items: product}
    )

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }
    console.log(response)
    
    redirectToCheckout({sessionId: response.id})
  }

  return (
    <form onSubmit={handleCheckout}>
      <div className='h-screen bg-gray-300 '>
        <div className='py-12'>
          <div className='max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg md:max-w-5xl md:flex'>
            <div className='w-full p-4 px-5 py-5'>
              <div className='gap-2 md:grid md:grid-cols-2'>
                <div className='col-span-2 p-5'>
                  <h1 className='text-xl font-medium '>Shopping Cart</h1>
                  {cart.map((item) => (
                    <div key={item.id} className='p-4'>
                      <CheckoutItem
                        id={item.id}
                        title={item.name}
                        price={item.formattedPrice}
                        quantity={item.quantity}
                        description={item.description}
                        profileSrc={item.profileSrc}
                      />
                    </div>
                  ))}
                  <div className='flex items-center justify-between pt-6 mt-6 border-t'>
                    <div className='flex items-center'>
                      <i className='pr-2 text-sm fa fa-arrow-left'></i>
                      <Link href='/coaches'>
                        <a className='font-medium text-blue-500 text-md'>
                          Continue Shopping
                        </a>
                      </Link>
                    </div>
                    <div className='flex items-center'>
                      <button
                        className='mr-4 font-medium text-blue-500 cart-style-background text-md disabled:text-slate-400'
                        type='submit'
                        disabled={cartEmpty || loading}>
                        Checkout
                      </button>
                      <span className='mr-1 text-sm font-medium text-gray-400'>
                        Subtotal:
                      </span>
                      <span className='text-lg font-bold text-gray-800 '>
                        {formattedTotalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
