import type { EditBlogDetailById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import BlogDetailForm from 'src/components/BlogDetail/BlogDetailForm'

export const QUERY = gql`
  query EditBlogDetailById($id: String!) {
    blogDetail: blogDetail(id: $id) {
      id
      title
      subtitle
    }
  }
`
const UPDATE_BLOG_DETAIL_MUTATION = gql`
  mutation UpdateBlogDetailMutation($id: String!, $input: UpdateBlogDetailInput!) {
    updateBlogDetail(id: $id, input: $input) {
      id
      title
      subtitle
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogDetail }: CellSuccessProps<EditBlogDetailById>) => {
  const [updateBlogDetail, { loading, error }] = useMutation(UPDATE_BLOG_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('BlogDetail updated')
      navigate(routes.blogDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateBlogDetail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit BlogDetail {blogDetail.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BlogDetailForm blogDetail={blogDetail} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
