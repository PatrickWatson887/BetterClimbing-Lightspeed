import { CoachItem } from '../cards/coachItem'
import { useState, useEffect, useRef } from 'react'
import itemService from '../../services/itemService'
import { coachDataParser } from '../../utils/coachDataParser'
import { Ratings } from '../ratings'
import { Item, ItemDb, Tag } from '../../types/features'
import Image from 'next/image'
import Link from 'next/link'



type CoachProfileProps = React.HTMLAttributes<HTMLDivElement> & {
  coachId: number
  name: string
  location: string
  rating: number
  description: string
  tags: string
  profileSrc: string
  deferred?: any[]
}

export default function CoachProfile({
  coachId,
  name,
  location,
  rating,
  description,
  tags,
  profileSrc,
  ...deferred
}: CoachProfileProps) {
  const { className = '', ...rest } = deferred
  const [coachesItems, setCoachesItems] = useState<Item[][]>([[]])
  const [page, newPage] = useState(0)
  const [maxPage, setMaxPage] = useState(0)

  useEffect(() => {
    fetchCoachesItems()
  }, [])

  const fetchCoachesItems = () => {
    itemService
      .getAllItemsForCoach(coachId)
      .then(async (response: any) => {

        var itemsParsed: Item[] = []
        var pagination: Item[][] = []
        response.data.forEach((item: ItemDb, index: number) => {
          var currentItem: Item = {
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            spaces: item.spaces,
            spacesFilled: item.spaces_filled,
          }
          if (index % 3 == 0 && index !== 0) {
            pagination.push(itemsParsed)
            itemsParsed=[]
            itemsParsed.push(currentItem)
          } else {
            itemsParsed.push(currentItem)
          }
        })
        pagination.push(itemsParsed)
        setMaxPage(pagination.length -1 )
        setCoachesItems(pagination)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  function handlePage(isNext: boolean) {
    if (isNext) {
      if (page == maxPage) {
        newPage(0)
      } else {
        newPage(page+1)
      }
    } else {
      if (page == 0) {
        newPage(maxPage)
      } else {
        newPage(page-1)
      }
    }
  }


  return (
    <div className='h-screen bg-gray-300 w-full '>
    <div className='container mx-auto my-5 p-5'>
      <div className='md:flex no-wrap md:-mx-2 '>
        <div className='w-full md:w-3/12 md:mx-2'>
          <div className='grid grid-rows-3 bg-white p-3 border-t-4 border-blue-600 h-64 rounded-lg flex'>
            <div className='ml-3'>
            <Ratings rating={rating} />
            </div>
            <div className='ml-3'>
              {location}
            </div>
            <div className='flex flex-col ml-3'>
              <span className='w-auto font-medium text-md'>Find more coaches like {name}:</span>
              <div className='flex flex-wrap w-full gap-1 pt-3 text-slate-50'>
                {JSON.parse(tags).map((tag: Tag) => (
                  <Link
                    href={{
                      pathname: '/coaches',
                      query: { data: tag.title },
                    }}
                    key={tag.title}>
                    <a className='chip'>{tag.title}</a>
                  </Link>
                ))}
              </div>              
            </div>    
          </div>
        </div>
        <div className='w-full md:w-9/12 mx-2 h-64'>
          <div className='bg-white p-3 shadow-sm rounded-lg'>
            <div className='grid grid-cols-3 h-64 items-justify-center'>
              <div className='p-8 ml-6'>
                <div className='relative w-[10.5rem] h-[10.5rem] min-w-[5.5rem] min-h-[5.5rem] overflow-hidden rounded-full'>
                  <Image
                  src={profileSrc}
                  alt='Profile picture'
                  layout='fill'
                  objectFit='cover'
                  />
                </div>
              </div>
              <div className='flex flex-col ml-3 py-10'>
                <span className='w-auto font-medium text-md'>{name}</span>
                <span className='text-md font-medium text-gray-400'>{location}</span>
              </div>    
              <div className='flex flex-col pr-10 py-10 '>
                <span className='w-auto font-medium text-md'>About me:</span>
                <span className='text-md font-medium text-gray-400'>{description}</span>
              </div>                 
            </div>
            <div className='divider-b'></div>
            {coachesItems[page].map((item) => (
                <div key={item.id} className='p-4'>
                  <CoachItem {...item} profileSrc={profileSrc} />
                </div>
              ))}
              <div className="flex flex-col items-center">
                {maxPage == 0 ? '' :
                <>
                <button onClick={() => { handlePage(false) } } className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                </button>
                <button onClick={() => { handlePage(true) } } className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                </>}
              </div>
            </div> 
          </div>
       </div>
    </div>
  </div>
)}