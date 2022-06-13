import type { EditAboutDetailById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import AboutDetailForm from 'src/components/AboutDetail/AboutDetailForm'

export const QUERY = gql`
  query EditAboutDetailById($id: Int!) {
    aboutDetail: aboutDetail(id: $id) {
      id
      title
      subtitle
    }
  }
`
const UPDATE_ABOUT_DETAIL_MUTATION = gql`
  mutation UpdateAboutDetailMutation($id: Int!, $input: UpdateAboutDetailInput!) {
    updateAboutDetail(id: $id, input: $input) {
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

export const Success = ({ aboutDetail }: CellSuccessProps<EditAboutDetailById>) => {
  const [updateAboutDetail, { loading, error }] = useMutation(UPDATE_ABOUT_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('AboutDetail updated')
      navigate(routes.aboutDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateAboutDetail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit AboutDetail {aboutDetail.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AboutDetailForm aboutDetail={aboutDetail} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
