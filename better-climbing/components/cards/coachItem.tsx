import { Item } from '../../types/features'
import { LinkButton } from '../button'
import React from "react"
import { useShoppingCart } from 'use-shopping-cart/react'

type CoachItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> &
  Item & {
    profileSrc: string
    deferred?: any[]
  }

export const CoachItem = ({
  id,
  title,
  description,
  price,
  spaces,
  spacesFilled,
  profileSrc,
  ...deferred
}: CoachItemProps) => {
  const { className, ...rest } = deferred
  const { addItem, removeItem } = useShoppingCart()

  return (
    <>
      <div
        className='relative p-3 bg-white border rounded rounded-lg h-32 shadow-sm border-gray-300'
        {...rest}>
          <div className='absolute top-3 right-8'>
            <span className='w-auto font-medium text-md'>£{price}</span>
          </div>
          <div className='flex flex-col ml-3 '>
            <div>
              <span className='text-md font-medium'>Session: </span>
              <span className='text-md font-medium text-gray-400'>{title}</span>
            </div>
            <div>
              <span className='text-md font-medium'>Spaces booked: </span>
              <span className='text-md font-medium text-gray-400'>{spacesFilled}/{spaces}</span>
            </div>
            <div>
              <span className='text-md font-medium'>Description: </span>
              <span className='text-md font-medium text-gray-400'>{description}</span>
            </div>
          </div>
          <div className='absolute bottom-4 right-8'>
            {spaces !== spacesFilled ? 
            <LinkButton impact='medium' 
              onClick={() =>
              addItem({
                name: title,
                id: id.toString(),
                description: description,
                price: price * 100,
                currency: 'GBP',
                profileSrc: profileSrc,
              })
            }
            href='/cart'>Book Now</LinkButton> : '' }
          </div>
      </div> 
      <div className='my-4'></div>
    </>
  )
}