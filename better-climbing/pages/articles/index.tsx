import { articles } from '../../components/sections/dummyData'
import AllArticles from '../../components/sections/allArticles'
import { getLayout } from '../../layouts/layout'
import { NextPageWithLayout } from '../../types/pages'
import { NextSeo } from 'next-seo'

const Articles: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title={`Article | Better Climbing`} />
      <div className='flex flex-col items-center justify-center '>
        <AllArticles articles={articles} />
      </div>
    </>
  )
}

Articles.getLayout = getLayout

export default Articles
