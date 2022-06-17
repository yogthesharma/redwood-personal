import { Link, routes } from '@redwoodjs/router'
import { useCallback, useMemo } from 'react'

import type { Post } from 'types/graphql'

interface Props {
  article: Post
  className?: string
}

const Article = ({ article, className }: Props) => {
  const tagsArr = useMemo(() => article.tags.split(','), [article.tags])

  return (
    <article className={`${className}`}>
      <header className="lg:bg-black-500 rounded-sm max-h-48">
        <Link to={routes.blog({ id: article.id })}>
          <div className="lg:px-6 py-6 flex">
            <main className="lg:w-3/4 pr-4">
              <div className="lg: inline-block ml-auto">
                {tagsArr.map((tag) => (
                  <span className="p-1 px-2 bg-black-100 rounded-md text-xs text-white-900">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="lg:font-medium text-2xl mt-2">
                {article.title}
              </h2>
              <div className="flex text-sm mt-2 text-gray-400">
                <p>{article.author.replace('_', ' ')}</p>
                <p className="mx-2">&#x007C;</p>
                <p>{article.createdAt.toString().slice(0, 10)}</p>
              </div>
              <p className='mt-2 max-h-8 truncate font-light'>{article.subtitle}</p>
            </main>
            <div className="lg:w-1/4 overflow-hidden rounded-sm">
              <img
                src={article.image}
                className="w-full lg: rounded-lg"
                alt="Blog_image"
              />
            </div>
          </div>
        </Link>
      </header>
    </article>
  )
}

export default Article
