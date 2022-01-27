import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import ArticleDetails from '../../components/sections/articleDetails'
import { getLayout } from '../../layouts/layout'
import { NextPageWithLayout } from '../../types/pages'

const ArticleDetail: NextPageWithLayout = () => {
  const router = useRouter()
  const articleId = router.query.id as string | undefined

  return (
    <>
      <NextSeo title={articleId} />
      <div className='flex flex-col items-center justify-center'>
        <ArticleDetails articleId={articleId as string} />
      </div>
    </>
  )
}

ArticleDetail.getLayout = getLayout

export default ArticleDetail
