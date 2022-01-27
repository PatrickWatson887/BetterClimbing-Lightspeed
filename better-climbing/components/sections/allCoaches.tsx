import { useState, useEffect } from 'react'
import { Coach } from '../../types/features'
import { CoachCard } from '../cards/coach'
import geocode from '../../pages/api/googleMaps/geocode'
import Fuse from 'fuse.js'
import { useRouter } from 'next/router'
import coachService from '../../services/coachService'
import tagService from '../../services/tagService'
import { coachDataParser } from '../../utils/coachDataParser'
import { synonymDataParser } from '../../utils/synonymDataParser'


type AllCoachesProps = React.HTMLAttributes<HTMLDivElement> & {
  deferred?: any[]
}

export default function AllCoaches({ ...deferred }: AllCoachesProps) {
  const router = useRouter()
  const preclickedTag = router.query?.data
    ? router.query.data.toString()
    : undefined

  const { className = '', ...rest } = deferred
  const [query, updateQuery] = useState('')
  const [search, updateSearch] = useState<string[]>(
    preclickedTag ? [preclickedTag] : []
  )
  const [coachesResults, updateCoaches] = useState<Coach[]>([])
  const [allCoaches, setCoaches] = useState<Coach[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    coachService
      .getAllWithTags()
      .then(async (response: any) => {
        const tempCoaches = coachDataParser(response.data)
        tagService
          .getTagsSynonyms()
          .then(async (response: any) => {
            let coaches: Coach[] = synonymDataParser(response.data, tempCoaches)
            setCoaches(coaches)
            if (preclickedTag) coaches = await applyFilter(coaches, preclickedTag)
            updateCoaches(coaches)
          })
          .catch((e: Error) => {
            console.log(e)
          })
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    updateQuery(e.currentTarget.value)
  }

  async function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && query !== '') {
      await applyAllFilters(coachesResults, '')
    }
  }

  async function applyAllFilters(searchedCoaches: Coach[], tag: string) {
    let filters = search
    tag !== ''
      ? (filters = filters.filter((filter) => {
          return filter !== tag
        }))
      : filters.push(query)
    if (filters.length > 0) {
      for (let i = 0; i < filters.length; i++) {
        searchedCoaches = await applyFilter(searchedCoaches, filters[i])
      }
    } else if (tag == '') {
      searchedCoaches = await applyFilter(searchedCoaches, query)
    }
    updateQuery('')
    updateCoaches(searchedCoaches)
  }

  async function applyFilter(searchedCoaches: Coach[], filter: string) {
    let fuse = new Fuse(searchedCoaches, {
      keys: ['name', 'tags.title', 'tags.synonym.title'],
      threshold: 0.1,
    })
    let results = fuse.search(filter)
    if (results.length == 0) {
      return searchCoachesByLocation(searchedCoaches, filter)
    }
    return results.map((coach) => coach.item)
  }

  async function searchCoachesByLocation(searchedCoaches: Coach[], location: string) {
    let { lat, lng } = await geocode(location)
    searchedCoaches = searchedCoaches.filter((coach) => {
      return (
        distanceInKmBetweenEarthCoordinates(lat, lng, coach.lat, coach.lng) <
        165
      )
    })
    return searchedCoaches
  }

  return (
    <section
      className={`relative flex flex-col items-center pt-14 pb-10 overflow-auto max-w-7xl divider-b ${className}`}
      {...rest}>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <span
          className={
            'data' in router.query ? 'opacity-0' : 'opacity-0 animate-appear'
          }>
          Take a browse through our expert coaches. Search by name, expertise or
          location.
        </span>
      </div>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <div className='relative'>
          <input
            type='text'
            className='z-0 pl-5 pr-8 rounded-lg h-14 w-96 focus:shadow focus:outline-none justify-items-center'
            placeholder='Search'
            value={query}
            onChange={onSearch}
            onKeyPress={onEnter}
          />
          {search.map((tag) => (
            <span
              className='px-4 py-2 text-sm font-semibold text-white capitalize transition duration-300 bg-blue-500 rounded-full cursor-pointer w-max active:bg-gray-300 ease'
              key={`${tag}`}
              onClick={() => {
                updateSearch(
                  search.filter((filter) => {
                    return filter !== tag
                  })
                )
                applyAllFilters(allCoaches, tag)
              }}>
              {tag}
              <button className='bg-transparent hover focus:outline-none'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='times'
                  className='w-3 ml-3'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 352 512'>
                  <path
                    fill='currentColor'
                    d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'></path>
                </svg>
              </button>
            </span>
          ))}

          <div className='absolute top-4 right-3'>
            <i className='z-20 text-gray-400 fa fa-search hover:text-gray-500'></i>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center py-4'>
        <FilteredCoaches searchResults={coachesResults} />
      </div>
    </section>
  )
}

type FilteredCoachesProps = {
  searchResults: Coach[]
}
const FilteredCoaches = ({ searchResults }: FilteredCoachesProps) => {
  if (searchResults.length === 0) {
    return <p>Sorry there appears to be no matches for your search</p>
  } else {
    return (
      <>
        {searchResults.map((coach) => (
          <div key={coach.coachId.toString()} className='p-4'>
            <CoachCard {...coach} />
          </div>
        ))}
      </>
    )
  }
}

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180
}

function distanceInKmBetweenEarthCoordinates(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  var earthRadiusKm = 6371

  var dLat = degreesToRadians(lat2 - lat1)
  var dLon = degreesToRadians(lon2 - lon1)

  lat1 = degreesToRadians(lat1)
  lat2 = degreesToRadians(lat2)

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadiusKm * c
}
