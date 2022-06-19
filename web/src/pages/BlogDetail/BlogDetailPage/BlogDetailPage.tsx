import BlogDetailCell from 'src/components/BlogDetail/BlogDetailCell'

type BlogDetailPageProps = {
  id: string
}

const BlogDetailPage = ({ id }: BlogDetailPageProps) => {
  return <BlogDetailCell id={id} />
}

export default BlogDetailPage
