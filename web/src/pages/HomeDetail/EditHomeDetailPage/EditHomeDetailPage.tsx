import EditHomeDetailCell from 'src/components/HomeDetail/EditHomeDetailCell'

type HomeDetailPageProps = {
  id: string
}

const EditHomeDetailPage = ({ id }: HomeDetailPageProps) => {
  return <EditHomeDetailCell id={id} />
}

export default EditHomeDetailPage
