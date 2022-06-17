import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from '../Article/Article'

export const QUERY = gql`
  query RecentPostsQuery {
    recentPosts {
      id
      subtitle
      title
      image
      tags
      author
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ recentPosts }: CellSuccessProps) => {
  return (
    <main>
      <div className='lg:mt-10 text-5xl font-semibold text-red-500'>Recent Blogs</div>
      {recentPosts.map((article) => (
        <Article className="mt-4" key={article.id} article={article} />
      ))}
    </main>
  )
}
