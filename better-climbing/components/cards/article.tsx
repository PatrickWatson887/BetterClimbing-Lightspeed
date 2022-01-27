import Image from 'next/image'
import Link from 'next/link'
import { Article } from '../../types/features'

type ArticleCardProps = Article & {
  landscape?: boolean
  deferred?: any[]
}

/**
 * **Article Card**
 *
 * ---
 *
 * `landscape`: `false` by default - resizes height based on content. Image has a fixed height in this mode. `true` - resizes width based on content, up until a maxWidth, then resizes height. Image takes up the full height.
 *
 * `link`: Clicking the card will take the user to this href
 *
 * `imageSrc`: src of the banner-image for the card
 *
 * `title`: Bold title text
 *
 * `text`: Description text
 *
 * `avatarSrc`: src of the avatar-image for the card
 *
 * `author`: Name of the author of the linked article
 */
export const ArticleCard = ({
  id,
  landscape,
  articleLink,
  imageSrc,
  imageAlt = 'Article background image',
  title,
  description,
  profileSrc,
  author,
  ...deferred
}: ArticleCardProps) => (
  <Link href={articleLink}>
    <a
      className={`${
        landscape ? 'flex-row' : 'w-72 flex-col'
      } relative flex  m-6 rounded-lg shadow-lg bg-slate-0 transition-all hover:bg-slate-200/30 hover:-translate-y-1.5 duration-300`}
      {...deferred}>
      <div
        className={`next-image-wrapper w-72 ${landscape ? 'h-full' : 'h-44'}`}>
        <Image
          className={`rounded-tl-lg next-image ${
            landscape ? 'rounded-bl-lg' : 'rounded-tr-lg'
          }`}
          layout='fill'
          objectFit='cover'
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className={`flex flex-col p-4 ${landscape && 'w-72'}`}>
        <h3 className='text-lg font-extrabold text-slate-700'>{title}</h3>
        <p className='pt-2 pb-4'>{description}</p>
        <div className='flex items-center mt-auto'>
          <Image
            src={profileSrc}
            alt='Profile picture'
            width={40}
            height={40}
            className='rounded-full'
            objectFit='cover'
          />
          <div className='ml-4 font-semibold '>{author}</div>
        </div>
      </div>
    </a>
  </Link>
)
