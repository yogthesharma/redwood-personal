import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TIMELINE_MUTATION = gql`
  mutation DeleteTimelineMutation($id: String!) {
    deleteTimeline(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Timeline = ({ timeline }) => {
  const [deleteTimeline] = useMutation(DELETE_TIMELINE_MUTATION, {
    onCompleted: () => {
      toast.success('Timeline deleted')
      navigate(routes.timelines())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete timeline ' + id + '?')) {
      deleteTimeline({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Timeline {timeline.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{timeline.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{timeline.title}</td>
            </tr><tr>
              <th>Subtitle</th>
              <td>{timeline.subtitle}</td>
            </tr><tr>
              <th>Year</th>
              <td>{formatEnum(timeline.year)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTimeline({ id: timeline.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(timeline.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Timeline
