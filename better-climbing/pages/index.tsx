import { NextSeo } from 'next-seo'
import BookNow from '../components/sections/bookNow'
import { articles } from '../components/sections/dummyData'
import FeaturedArticles from '../components/sections/featuredArticles'
import FeaturedCoaches from '../components/sections/featuredCoaches'
import Hero from '../components/sections/hero'
import { getLayout } from '../layouts/layout'
import { NextPageWithLayout } from '../types/pages'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title='Home | Better Coaching' />
      <div className='flex flex-col items-center justify-center '>
        <Hero />
        <FeaturedCoaches />
        <FeaturedArticles
          tagline='Climbing is the world&rsquo;s fastest growing sport! Don&rsquo;t miss out!'
          articles={articles}
        />
        <BookNow />
      </div>
    </>
  )
}

Home.getLayout = getLayout

export default Home
