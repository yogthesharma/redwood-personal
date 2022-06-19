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
      <div className='lg:mt-14 text-3xl font-normal text-red-500'>Recent Blogs</div>
      {recentPosts.map((article) => (
        <Article className="mt-4" key={article.id} article={article} />
      ))}
    </main>
  )
}
