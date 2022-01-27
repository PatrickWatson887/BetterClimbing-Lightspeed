import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import CoachProfile from '../../components/sections/coachProfile'
import { getLayout } from '../../layouts/layout'
import { NextPageWithLayout } from '../../types/pages'

const CoachDetails: NextPageWithLayout = () => {
  const router = useRouter()
  const coach = router.query

  return (
    <>
      <NextSeo title={`Coach - ${coach.id} | Better Climbing`} />
      <div className='flex flex-col items-center justify-center'>
        <CoachProfile
          coachId={coach.id as unknown as number}
          name={coach.name as string}
          location={coach.location as string}
          rating={coach.rating as unknown as number}
          description={coach.body as string}
          tags={coach.tags as string}
          profileSrc={coach.profileSrc as string}
        />
      </div>
    </>
  )
}

CoachDetails.getLayout = getLayout

export default CoachDetails
