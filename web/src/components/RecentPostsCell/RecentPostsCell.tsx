import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from '../Article/Article'


export const QUERY = gql`
  query RecentPostsQuery {
    recentPosts {
      id
      subtitle
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ recentPosts }: CellSuccessProps) => {
  return recentPosts.map((article) => (
    <Article className='mt-8' key={article.id} article={article} />
  ))
}
