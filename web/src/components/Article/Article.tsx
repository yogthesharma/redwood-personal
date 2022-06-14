import { Link, routes } from '@redwoodjs/router'

import type { Post } from 'types/graphql'

interface Props {
  article: Post
  className?: string
}

const Article = ({ article, className }: Props) => {
  return (
    <article className={className}>
      <header>
        <Link to={routes.blog({ id: article.id })}>
          <h2 className="font-semibold text-2xl">{article.title}</h2>
          <p>{article.subtitle}</p>
        </Link>
      </header>
    </article>
  )
}

export default Article
