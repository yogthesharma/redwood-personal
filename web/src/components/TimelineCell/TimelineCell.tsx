import type {
  FindTimelineQuery,
  FindTimelineQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTimelineQuery {
    timeline: timelines {
      id
      year
      subtitle
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTimelineQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  timeline,
}: CellSuccessProps<FindTimelineQuery, FindTimelineQueryVariables>) => {
  // const sortedTimeline = timeline.sort(time => time.year)
  const years = new Array(
    ...new Set(
      timeline
        .map((time) => time.year.replace('y', ''))
        .sort()
        .reverse()
    ).values()
  )
  return (
    <div>
      <div className="lg:mt-10 text-5xl font-semibold">Timeline</div>
      {years.map((year) => (
        <article key={year}>
          <div>{year}</div>
          {timeline.map((time) =>
            time.year.replace('y', '') === year ? (
              <div>
                <div>{time.title}</div>
                <p>{time.subtitle}</p>
              </div>
            ) : null
          )}
        </article>
      ))}
    </div>
  )
}
