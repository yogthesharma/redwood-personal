import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const BlogsPage = () => {
  return (
    <>
      <MetaTags title="Blogs" description="Blogs page" />
      <ArticlesCell />
    </>
  )
}

export default BlogsPage
