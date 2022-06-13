import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from "@redwoodjs/router"

type BlogLayoutProps = {
  children?: React.ReactNode
}



const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const routesVar = [{
    name: "Home",
    route: routes.home()
  }, {
    name: "About",
    route: routes.about()
  }, {
    name: "Blog",
    route: routes.home()
  }]

  return <div className="max-w-5xl w-full px-4 mx-auto">
    <header className='py-4 flex align-middle justify-between'>
      <div className="flex align-middle justify-between">
        <h1>
          <Link to={routes.home()}>Yog Sharma</Link>
        </h1> {isAuthenticated ? (
          <div>
            <span>Logged in as {currentUser.email}</span>{' '}
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()}>Login</Link>
        )}
      </div>
      <nav>
        <ul className='flex'>
          {routesVar.map(route => (
            <li className='ml-10 text-blue-800 font-semibold'><Link to={route.route}>{route.name}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
    {children}
  </div>
}

export default BlogLayout
