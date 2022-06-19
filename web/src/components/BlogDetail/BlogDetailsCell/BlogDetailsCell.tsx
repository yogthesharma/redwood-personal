import type { FindBlogDetails } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import BlogDetails from 'src/components/BlogDetail/BlogDetails'

export const QUERY = gql`
  query FindBlogDetails {
    blogDetails {
      id
      title
      subtitle
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No blogDetails yet. '}
      <Link
        to={routes.newBlogDetail()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogDetails }: CellSuccessProps<FindBlogDetails>) => {
  return <BlogDetails blogDetails={blogDetails} />
}
