import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AboutDetailCell from 'src/components/AboutDetailsCell'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <AboutDetailCell />
    </>
  )
}

export default AboutPage
