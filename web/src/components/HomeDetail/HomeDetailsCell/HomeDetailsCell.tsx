import type { FindHomeDetails } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import HomeDetails from 'src/components/HomeDetail/HomeDetails'

export const QUERY = gql`
  query FindHomeDetails {
    homeDetails {
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
      {'No homeDetails yet. '}
      <Link
        to={routes.newHomeDetail()}
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

export const Success = ({ homeDetails }: CellSuccessProps<FindHomeDetails>) => {
  return <HomeDetails homeDetails={homeDetails} />
}
