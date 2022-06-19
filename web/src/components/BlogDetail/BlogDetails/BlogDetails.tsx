import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/BlogDetail/BlogDetailsCell'

const DELETE_BLOG_DETAIL_MUTATION = gql`
  mutation DeleteBlogDetailMutation($id: String!) {
    deleteBlogDetail(id: $id) {
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

const BlogDetailsList = ({ blogDetails }) => {
  const [deleteBlogDetail] = useMutation(DELETE_BLOG_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('BlogDetail deleted')
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
    if (confirm('Are you sure you want to delete blogDetail ' + id + '?')) {
      deleteBlogDetail({ variables: { id } })
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
          {blogDetails.map((blogDetail) => (
            <tr key={blogDetail.id}>
              <td>{truncate(blogDetail.id)}</td>
              <td>{truncate(blogDetail.title)}</td>
              <td>{truncate(blogDetail.subtitle)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.blogDetail({ id: blogDetail.id })}
                    title={'Show blogDetail ' + blogDetail.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBlogDetail({ id: blogDetail.id })}
                    title={'Edit blogDetail ' + blogDetail.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete blogDetail ' + blogDetail.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(blogDetail.id)}
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

export default BlogDetailsList
