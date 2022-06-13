import type { FindAboutDetailById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AboutDetail from 'src/components/AboutDetail/AboutDetail'

export const QUERY = gql`
  query FindAboutDetailById($id: Int!) {
    aboutDetail: aboutDetail(id: $id) {
      id
      title
      subtitle
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AboutDetail not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ aboutDetail }: CellSuccessProps<FindAboutDetailById>) => {
  return <AboutDetail aboutDetail={aboutDetail} />
}
