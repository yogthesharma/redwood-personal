import EditBlogDetailCell from 'src/components/BlogDetail/EditBlogDetailCell'

type BlogDetailPageProps = {
  id: string
}

const EditBlogDetailPage = ({ id }: BlogDetailPageProps) => {
  return <EditBlogDetailCell id={id} />
}

export default EditBlogDetailPage
