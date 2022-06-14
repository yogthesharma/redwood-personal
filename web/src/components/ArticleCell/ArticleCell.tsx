import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import SingleArticle from '../SingleArticle/SingleArticle'

export const QUERY = gql`
  query FindArticleQuery($id: String!) {
    article: post(id: $id) {
      id
      title
      subtitle
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  article,
}: CellSuccessProps) => {
  return <SingleArticle article={article} />
}
