import type { FindBlogDetailById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BlogDetail from 'src/components/BlogDetail/BlogDetail'

export const QUERY = gql`
  query FindBlogDetailById($id: String!) {
    blogDetail: blogDetail(id: $id) {
      id
      title
      subtitle
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BlogDetail not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogDetail }: CellSuccessProps<FindBlogDetailById>) => {
  return <BlogDetail blogDetail={blogDetail} />
}
