import EditAboutDetailCell from 'src/components/AboutDetail/EditAboutDetailCell'

type AboutDetailPageProps = {
  id: number
}

const EditAboutDetailPage = ({ id }: AboutDetailPageProps) => {
  return <EditAboutDetailCell id={id} />
}

export default EditAboutDetailPage
