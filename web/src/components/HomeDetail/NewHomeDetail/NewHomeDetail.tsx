import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import HomeDetailForm from 'src/components/HomeDetail/HomeDetailForm'

const CREATE_HOME_DETAIL_MUTATION = gql`
  mutation CreateHomeDetailMutation($input: CreateHomeDetailInput!) {
    createHomeDetail(input: $input) {
      id
    }
  }
`

const NewHomeDetail = () => {
  const [createHomeDetail, { loading, error }] = useMutation(CREATE_HOME_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('HomeDetail created')
      navigate(routes.homeDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createHomeDetail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New HomeDetail</h2>
      </header>
      <div className="rw-segment-main">
        <HomeDetailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewHomeDetail
