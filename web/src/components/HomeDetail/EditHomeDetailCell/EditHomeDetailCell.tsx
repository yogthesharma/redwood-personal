import type { EditHomeDetailById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import HomeDetailForm from 'src/components/HomeDetail/HomeDetailForm'

export const QUERY = gql`
  query EditHomeDetailById($id: String!) {
    homeDetail: homeDetail(id: $id) {
      id
      title
      subtitle
    }
  }
`
const UPDATE_HOME_DETAIL_MUTATION = gql`
  mutation UpdateHomeDetailMutation($id: String!, $input: UpdateHomeDetailInput!) {
    updateHomeDetail(id: $id, input: $input) {
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

export const Success = ({ homeDetail }: CellSuccessProps<EditHomeDetailById>) => {
  const [updateHomeDetail, { loading, error }] = useMutation(UPDATE_HOME_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('HomeDetail updated')
      navigate(routes.homeDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateHomeDetail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit HomeDetail {homeDetail.id}</h2>
      </header>
      <div className="rw-segment-main">
        <HomeDetailForm homeDetail={homeDetail} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
