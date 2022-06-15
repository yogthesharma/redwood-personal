import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Timeline/TimelinesCell'

const DELETE_TIMELINE_MUTATION = gql`
  mutation DeleteTimelineMutation($id: String!) {
    deleteTimeline(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const TimelinesList = ({ timelines }) => {
  const [deleteTimeline] = useMutation(DELETE_TIMELINE_MUTATION, {
    onCompleted: () => {
      toast.success('Timeline deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete timeline ' + id + '?')) {
      deleteTimeline({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Year</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {timelines.map((timeline) => (
            <tr key={timeline.id}>
              <td>{truncate(timeline.id)}</td>
              <td>{truncate(timeline.title)}</td>
              <td>{truncate(timeline.subtitle)}</td>
              <td>{formatEnum(timeline.year)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.timeline({ id: timeline.id })}
                    title={'Show timeline ' + timeline.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTimeline({ id: timeline.id })}
                    title={'Edit timeline ' + timeline.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete timeline ' + timeline.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(timeline.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TimelinesList
