import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { useCallback, useEffect, useState } from 'react'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const [currSong, setCurrSong] = useState<string>('')
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const routesVar = () => {
    const publicRoutes = [
      {
        name: 'Home',
        route: routes.home(),
      },
      {
        name: 'About',
        route: routes.about(),
      },
      {
        name: 'Blog',
        route: routes.blogs(),
      },
    ]
    const privateRoutes = [
      { name: 'Post', route: routes.posts() },
      {
        name: 'About Details',
        route: routes.aboutDetails(),
      },
    ]
    if (isAuthenticated) {
      return [...publicRoutes, ...privateRoutes]
    }
    return [...publicRoutes]
  }

  const getSpotifyCurrentSong = useCallback(async () => {
    const res = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer BQB5pATlbEPxYjyaGnucwOIKcTsAf0oc2yTqlHsADzdxJFFI3-qkiHi77jCzvwn-W228gmLlpThUbbl_7kgTdgPd55UYZecTge3Ilfy_xMypPHTKbmHi2HKDnHO26ROn49qPf0V7umJEt98ayBKPNybqpUNyTP4qNA4GAzp4RsQPErd1r9whOURyZcnAb0hmXxgFUITcoA',
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error('Unable to load currently playing song'))
    setCurrSong(res.item.name)
  }, [])

  useEffect(() => {
    getSpotifyCurrentSong()
  }, [getSpotifyCurrentSong])

  return (
    <div className="max-w-5xl w-full px-4 mx-auto">
      <header className="py-4 flex align-middle justify-between">
        <div className="flex align-middle justify-between">
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser?.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul className="flex">
            {routesVar().map((route) => (
              <li
                key={route.name}
                className="ml-10 text-blue-800 font-semibold"
              >
                <Link to={route.route}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
      <div className="flex items-center" title="Song I am listining to.">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#1DB954"
          className="bi bi-spotify"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
        </svg>
        <p className="ml-2">{currSong}</p>
      </div>
    </div>
  )
}

export default BlogLayout
