import type { FindHomeDetailById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import HomeDetail from 'src/components/HomeDetail/HomeDetail'

export const QUERY = gql`
  query FindHomeDetailById($id: String!) {
    homeDetail: homeDetail(id: $id) {
      id
      title
      subtitle
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>HomeDetail not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ homeDetail }: CellSuccessProps<FindHomeDetailById>) => {
  return <HomeDetail homeDetail={homeDetail} />
}
