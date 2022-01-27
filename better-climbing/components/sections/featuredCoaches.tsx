import Image from 'next/image'
import Link from 'next/link'
import { Coach } from '../../types/features'
import { LinkButton } from '../button'
import { CoachCard } from '../cards/coach'
import coachService from '../../services/coachService'
import { coachDataParser } from '../../utils/coachDataParser'
import { useState, useEffect } from 'react'

type FeaturedCoachesProps = React.HTMLAttributes<HTMLDivElement> & {
  featurePage?: Boolean
  deferred?: any[]
}

export default function FeaturedCoaches({
  featurePage,
  ...deferred
}: FeaturedCoachesProps) {
  const { className = '', ...rest } = deferred
  const [coaches, setCoaches] = useState<Coach[]>([])

  useEffect(() => {
    fetchFeaturedCoaches()
  }, [])

  const fetchFeaturedCoaches = () => {
    coachService
      .getFeatured()
      .then((response: any) => {
        const coaches = coachDataParser(response.data)
        setCoaches(coaches)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }
  return (
    <section
      className={`relative flex flex-col items-center pt-14 pb-10 overflow-auto max-w-7xl divider-b ${className}`}
      {...rest}>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <div className='absolute w-[260px] h-[70px] -top-4 -left-10'>
          <Image
            src='/feature.svg'
            alt='Stars and hearts background'
            layout='fill'
          />
        </div>
        <span>Featured Coaches</span>
      </div>
      <div className='flex flex-wrap justify-center py-4'>
        {featurePage
          ? coaches
              .filter((coach) => coach.feature != undefined)
              .map((featureCoach) => (
                <div
                  key={featureCoach.name}
                  className='flex flex-col items-center p-4'>
                  {featureCoach.feature?.title && (
                    <div className='px-6 py-2 mb-4 text-sm transition-transform rounded-lg max-w-[20rem] bg-amber-300/50'>
                      <div className='font-semibold tracking-wider text-yellow-600 uppercase'>
                        {featureCoach.feature.title}
                      </div>
                      <div className='text-yellow-800'>
                        {featureCoach.feature.description}
                      </div>
                    </div>
                  )}
                  <CoachCard {...featureCoach} />
                </div>
              ))
          : coaches
              .filter((coach) => coach.feature != undefined)
              .slice(0, 3)
              .map((featureCoach) => (
                <div
                  key={featureCoach.name}
                  className='flex flex-col items-center p-4'>
                  {featureCoach.feature?.title && (
                    <div className='px-6 py-2 mb-4 text-sm transition-transform rounded-lg max-w-[20rem] bg-amber-300/50'>
                      <div className='font-semibold tracking-wider text-yellow-600 uppercase'>
                        {featureCoach.feature.title}
                      </div>
                      <div className='text-yellow-800'>
                        {featureCoach.feature.description}
                      </div>
                    </div>
                  )}
                  <CoachCard {...featureCoach} />
                </div>
              ))}
      </div>
      <Link href='/coaches' passHref>
        <LinkButton impact='low'>Check out our more coaches</LinkButton>
      </Link>
    </section>
  )
}
