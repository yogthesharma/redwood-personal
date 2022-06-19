import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type BlogDetailLayoutProps = {
  children: React.ReactNode
}

const BlogDetailsLayout = ({ children }: BlogDetailLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.blogDetails()}
            className="rw-link"
          >
            BlogDetails
          </Link>
        </h1>
        <Link
          to={routes.newBlogDetail()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New BlogDetail
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default BlogDetailsLayout
