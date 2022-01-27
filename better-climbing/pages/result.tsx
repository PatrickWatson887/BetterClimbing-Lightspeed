import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { getLayout } from '../layouts/layout'
import { NextPageWithLayout } from '../types/pages'
import { fetchGetJSON } from '../utils/apiHelpers'
import  PaymentSuccess from '../components/sections/paymentSuccess'



type Props = {
  content: object
}

const PrintObject = ({ content }: Props) => {
  const formattedContent: string = JSON.stringify(content, null, 2)
  return <pre>{formattedContent}</pre>
}

const ResultPage: NextPageWithLayout = () => {
  const router = useRouter()


  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>

  return (
    <>
      <NextSeo title='Checkout Payment Result' />
      <PaymentSuccess/>
      
    </>
  )
}

ResultPage.getLayout = getLayout

export default ResultPage
