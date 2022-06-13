import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AboutDetailForm from 'src/components/AboutDetail/AboutDetailForm'

const CREATE_ABOUT_DETAIL_MUTATION = gql`
  mutation CreateAboutDetailMutation($input: CreateAboutDetailInput!) {
    createAboutDetail(input: $input) {
      id
    }
  }
`

const NewAboutDetail = () => {
  const [createAboutDetail, { loading, error }] = useMutation(CREATE_ABOUT_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('AboutDetail created')
      navigate(routes.aboutDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createAboutDetail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AboutDetail</h2>
      </header>
      <div className="rw-segment-main">
        <AboutDetailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAboutDetail
