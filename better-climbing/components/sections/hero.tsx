import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '../button'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Search from '@iconify/icons-uil/search'
import CurrentLocation from '@iconify/icons-uil/location-point'
import { useRouter } from 'next/router'

export default function Hero() {
  const [query, updateQuery] = useState('')
  const router = useRouter()
  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    updateQuery(e.currentTarget.value)
  }

  return (
    <section className='relative divider-b'>
      <div className='grid w-full grid-cols-1 pt-20 pb-24 max-w-7xl md:grid-cols-2'>
        <div className='relative flex flex-col items-start px-4 mx-auto mt-10 max-w-7xl sm:text-center lg:text-left'>
          <h1 className='pb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl'>
            <span className='block text-3xl sm:text-4xl md:text-5xl'>
              Better Coaching
            </span>{' '}
            <span className='block pb-3 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 '>
              Better Climbing
            </span>
          </h1>
          <p className='my-5 text-base text-slate-500 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0'>
            We make it easy to find the perfect coach for you
          </p>
          <form
            className='relative h-14 mb-5 text-xl font-bold min-w-[24rem] w-full text-slate-800'
            onSubmit={(e) => {
              e.preventDefault()
              router.push({
                pathname: '/coaches',
                query: { data: query },
              })
            }}>
            <input
              id='location'
              type='text'
              aria-label='Search'
              className='w-full h-full pl-5 pr-2 rounded shadow bg-slate-50 grow focus:outline-none focus:shadow-lg'
              placeholder='Search by location'
              value={query}
              onChange={onSearch}
            />
            <div className='absolute flex -translate-y-1/2 top-1/2 right-4'>
              <Link
                href={{
                  pathname: '/coaches',
                  query: { data: query },
                }}>
                <a className='p-3 rounded-full cursor-pointer group hover:bg-blue-100'>
                  <Icon
                    icon={Search}
                    className='text-slate-400 group-hover:text-slate-700'
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/coaches',
                  query: { data: query },
                }}>
                <a className='relative p-3 rounded-full cursor-pointer group hover:bg-blue-100'>
                  <Icon
                    icon={CurrentLocation}
                    className='text-slate-400 group-hover:text-slate-700'
                  />
                  <div className='absolute p-2 rounded opacity-0 invisible bg-slate-900 text-slate-100 text-sm w-max top-[120%] transition-all group-hover:visible group-hover:top-[130%] left-1/2 -translate-x-1/2 group-hover:opacity-100'>
                    Use my location
                  </div>
                </a>
              </Link>
            </div>
          </form>
          <Link href='/coaches' passHref>
            <LinkButton impact='low'>See all of our coaches</LinkButton>
          </Link>
        </div>
        <div className='object-scale-down'>
          <Image
            width='680px'
            height='384px'
            src='/img/yonder.png'
            alt='A coach with client'
            layout='fixed'
          />
        </div>
      </div>
    </section>
  )
}
