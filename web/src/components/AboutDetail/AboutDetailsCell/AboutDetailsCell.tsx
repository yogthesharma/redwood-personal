import type { FindAboutDetails } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import AboutDetails from 'src/components/AboutDetail/AboutDetails'

export const QUERY = gql`
  query FindAboutDetails {
    aboutDetails {
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
      {'No aboutDetails yet. '}
      <Link
        to={routes.newAboutDetail()}
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

export const Success = ({ aboutDetails }: CellSuccessProps<FindAboutDetails>) => {
  return <AboutDetails aboutDetails={aboutDetails} />
}
