type ArticleDetailsProps = React.HTMLAttributes<HTMLDivElement> & {
  articleId: string
  deferred?: any[]
}

export default function ArticleDetails({
  articleId,
  ...deferred
}: ArticleDetailsProps) {
  return (
    <div className='container p-5 mx-auto my-5'>
      <div className='md:flex no-wrap md:-mx-2 '>
        <div className='w-full md:w-3/12 md:mx-2'>
          <div className='p-3 bg-white border-t-4 border-indigo-600'>
            <h1 className='my-1 text-xl font-bold leading-8 text-gray-900'>
              Jane Doe
            </h1>
          </div>
        </div>
        <div className='w-full h-64 mx-2 md:w-9/12'>
          <div className='p-3 bg-white rounded-sm shadow-sm'>
            <div className='flex items-center space-x-2 font-semibold leading-8 text-gray-900'>
              <span className='tracking-wide'>About</span>
            </div>
          </div>
          <div className='my-4'></div>
        </div>
      </div>
    </div>
  )
}
