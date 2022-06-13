import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AboutDetailLayoutProps = {
  children: React.ReactNode
}

const AboutDetailsLayout = ({ children }: AboutDetailLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.aboutDetails()}
            className="rw-link"
          >
            AboutDetails
          </Link>
        </h1>
        <Link
          to={routes.newAboutDetail()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New AboutDetail
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default AboutDetailsLayout
