import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type TimelineLayoutProps = {
  children: React.ReactNode
}

const TimelinesLayout = ({ children }: TimelineLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.timelines()}
            className="rw-link"
          >
            Timelines
          </Link>
        </h1>
        <Link
          to={routes.newTimeline()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Timeline
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TimelinesLayout
