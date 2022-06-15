import type { FindTimelines } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Timelines from 'src/components/Timeline/Timelines'

export const QUERY = gql`
  query FindTimelines {
    timelines {
      id
      title
      subtitle
      year
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No timelines yet. '}
      <Link
        to={routes.newTimeline()}
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

export const Success = ({ timelines }: CellSuccessProps<FindTimelines>) => {
  return <Timelines timelines={timelines} />
}
