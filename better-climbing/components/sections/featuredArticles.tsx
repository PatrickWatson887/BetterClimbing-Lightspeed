import Link from 'next/link'
import { Article } from '../../types/features'
import { LinkButton } from '../button'
import { ArticleCard } from '../cards/article'

type FeaturedArticlesProps = React.HTMLAttributes<HTMLDivElement> & {
  tagline: string
  articles: Article[]
  featurePage?: Boolean
  deferred?: any[]
}

export default function FeaturedArticles({
  tagline,
  articles,
  featurePage,
  ...deferred
}: FeaturedArticlesProps) {
  const { className = '', ...rest } = deferred

  return (
    <section
      className={`relative flex flex-col items-center pt-24 pb-6 overflow-auto max-w-7xl divider-b ${className}`}
      {...rest}>
      <div className='text-xl font-bold text-slate-800'>{tagline}</div>
      <div className='flex flex-wrap justify-center py-4'>
        {featurePage
          ? articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))
          : articles
              .slice(0, 3)
              .map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
      </div>
      <Link href='/articles' passHref>
        <LinkButton impact='low'>Check out our more articles</LinkButton>
      </Link>
    </section>
  )
}
