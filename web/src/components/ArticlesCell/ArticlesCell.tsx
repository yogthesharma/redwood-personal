import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from '../Article/Article'


export const QUERY = gql`
  query ArticlesQuery {
   articles: posts {
      id
      title
      subtitle
      createdAt
      image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps) => {
  return articles.map((article) => (
    <Article className='mt-8' key={article.id} article={article} />
  ))
}
