import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BLOG_DETAIL_MUTATION = gql`
  mutation DeleteBlogDetailMutation($id: String!) {
    deleteBlogDetail(id: $id) {
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

const BlogDetail = ({ blogDetail }) => {
  const [deleteBlogDetail] = useMutation(DELETE_BLOG_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('BlogDetail deleted')
      navigate(routes.blogDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete blogDetail ' + id + '?')) {
      deleteBlogDetail({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">BlogDetail {blogDetail.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{blogDetail.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{blogDetail.title}</td>
            </tr><tr>
              <th>Subtitle</th>
              <td>{blogDetail.subtitle}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBlogDetail({ id: blogDetail.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(blogDetail.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BlogDetail
