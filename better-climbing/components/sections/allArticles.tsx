import { useEffect, useState } from 'react'
import { Article, Coach } from '../../types.ts/features'
import { ArticleCard } from '../cards/article'
import Fuse from 'fuse.js'

type AllArticlesProps = React.HTMLAttributes<HTMLDivElement> & {
  articles: Article[]
  deferred?: any[]
}

export default function AllArticles({
  articles,
  ...deferred
}: AllArticlesProps) {
  const { className = '', ...rest } = deferred
  const [query, updateQuery] = useState('')

  const fuse = new Fuse(articles, {
    keys: ['title', 'author', 'description'],
    threshold: 0.1,
  })
  const results = fuse.search(query)
  const articlesResults = results.map((article) => article.item)

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    updateQuery(e.currentTarget.value)
  }

  return (
    <section
      className={`relative flex flex-col items-center pt-14 pb-10 overflow-auto max-w-7xl divider-b ${className}`}
      {...rest}>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <span>
          Take a browse through our wide variety of articles. Search by author,
          title or description.
        </span>
      </div>
      <div className='relative pb-6 text-xl font-bold text-slate-800'>
        <div className='relative'>
          <input
            type='text'
            className='z-0 pl-5 pr-8 rounded h-14 w-96 focus:shadow focus:outline-none'
            placeholder='Search'
            value={query}
            onChange={onSearch}
          />
          <div className='absolute top-4 right-3'>
            <i className='z-20 text-gray-400 fa fa-search hover:text-gray-500'></i>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center py-4'>
        {query == '' ? (
          articles.map((article) => (
            <div key={article.title} className='p-4'>
              <ArticleCard {...article} />
            </div>
          ))
        ) : articlesResults.length == 0 ? (
          <p>Sorry there appears to be no matches for your search</p>
        ) : (
          articlesResults.map((article) => (
            <div key={article.title} className='p-4'>
              <ArticleCard {...article} />
            </div>
          ))
        )}
      </div>
    </section>
  )
}
