import AllCoaches from '../../components/sections/allCoaches'
import FeaturedCoaches from '../../components/sections/featuredCoaches'
import { getLayout } from '../../layouts/layout'
import { NextPageWithLayout } from '../../types/pages'
import { NextSeo } from 'next-seo'

const Coaches: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title='Coaches | Better Climbing' />
      <div className='flex flex-col items-center justify-center '>
        <AllCoaches />
        <FeaturedCoaches />
      </div>
    </>
  )
}

Coaches.getLayout = getLayout

export default Coaches
