import { NextSeo } from 'next-seo'
import { articles } from '../../components/sections/dummyData'
import FeaturedArticles from '../../components/sections/featuredArticles'
import FeaturedCoaches from '../../components/sections/featuredCoaches'
import { getLayout } from '../../layouts/layout'
import { NextPageWithLayout } from '../../types/pages'

const Features: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title='Features | Better Climbing' />
      <div className='flex flex-col items-center justify-center '>
        <FeaturedCoaches featurePage={true} />
        <FeaturedArticles
          tagline='Climbing is the world&rsquo;s fastest growing sport! Don&rsquo;t miss out!'
          articles={articles}
          featurePage={true}
        />
      </div>
    </>
  )
}

Features.getLayout = getLayout

export default Features
