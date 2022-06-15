import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TimelineForm from 'src/components/Timeline/TimelineForm'

const CREATE_TIMELINE_MUTATION = gql`
  mutation CreateTimelineMutation($input: CreateTimelineInput!) {
    createTimeline(input: $input) {
      id
    }
  }
`

const NewTimeline = () => {
  const [createTimeline, { loading, error }] = useMutation(CREATE_TIMELINE_MUTATION, {
    onCompleted: () => {
      toast.success('Timeline created')
      navigate(routes.timelines())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTimeline({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Timeline</h2>
      </header>
      <div className="rw-segment-main">
        <TimelineForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTimeline
