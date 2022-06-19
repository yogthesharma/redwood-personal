import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BlogDetailForm from 'src/components/BlogDetail/BlogDetailForm'

const CREATE_BLOG_DETAIL_MUTATION = gql`
  mutation CreateBlogDetailMutation($input: CreateBlogDetailInput!) {
    createBlogDetail(input: $input) {
      id
    }
  }
`

const NewBlogDetail = () => {
  const [createBlogDetail, { loading, error }] = useMutation(CREATE_BLOG_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('BlogDetail created')
      navigate(routes.blogDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createBlogDetail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BlogDetail</h2>
      </header>
      <div className="rw-segment-main">
        <BlogDetailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBlogDetail
