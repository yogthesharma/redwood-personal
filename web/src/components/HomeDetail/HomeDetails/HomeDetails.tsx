import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/HomeDetail/HomeDetailsCell'

const DELETE_HOME_DETAIL_MUTATION = gql`
  mutation DeleteHomeDetailMutation($id: String!) {
    deleteHomeDetail(id: $id) {
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

const HomeDetailsList = ({ homeDetails }) => {
  const [deleteHomeDetail] = useMutation(DELETE_HOME_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('HomeDetail deleted')
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
    if (confirm('Are you sure you want to delete homeDetail ' + id + '?')) {
      deleteHomeDetail({ variables: { id } })
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
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {homeDetails.map((homeDetail) => (
            <tr key={homeDetail.id}>
              <td>{truncate(homeDetail.id)}</td>
              <td>{truncate(homeDetail.title)}</td>
              <td>{truncate(homeDetail.subtitle)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.homeDetail({ id: homeDetail.id })}
                    title={'Show homeDetail ' + homeDetail.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editHomeDetail({ id: homeDetail.id })}
                    title={'Edit homeDetail ' + homeDetail.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete homeDetail ' + homeDetail.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(homeDetail.id)}
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

export default HomeDetailsList
