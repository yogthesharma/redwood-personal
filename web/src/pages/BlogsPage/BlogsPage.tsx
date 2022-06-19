import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
import BlogDetailCell from 'src/components/BlogDetailCell'

const BlogsPage = () => {
  return (
    <>
      <MetaTags title="Blogs" description="Blogs page" />
      <BlogDetailCell />
      <ArticlesCell />
    </>
  )
}

export default BlogsPage
