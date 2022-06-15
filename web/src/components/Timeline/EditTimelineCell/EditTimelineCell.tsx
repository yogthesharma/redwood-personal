import type { EditTimelineById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TimelineForm from 'src/components/Timeline/TimelineForm'

export const QUERY = gql`
  query EditTimelineById($id: String!) {
    timeline: timeline(id: $id) {
      id
      title
      subtitle
      year
    }
  }
`
const UPDATE_TIMELINE_MUTATION = gql`
  mutation UpdateTimelineMutation($id: String!, $input: UpdateTimelineInput!) {
    updateTimeline(id: $id, input: $input) {
      id
      title
      subtitle
      year
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ timeline }: CellSuccessProps<EditTimelineById>) => {
  const [updateTimeline, { loading, error }] = useMutation(UPDATE_TIMELINE_MUTATION, {
    onCompleted: () => {
      toast.success('Timeline updated')
      navigate(routes.timelines())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTimeline({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Timeline {timeline.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TimelineForm timeline={timeline} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
