import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

const BlogPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Blog" description="Blog page" />
      <ArticleCell id={id} />
    </>
  )
}

export default BlogPage
