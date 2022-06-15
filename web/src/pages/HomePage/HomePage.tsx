import { MetaTags } from '@redwoodjs/web'
import HomeDetailCell  from 'src/components/HomeDetailsCell'
import RecentPostsCell from "src/components/RecentPostsCell"

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <HomeDetailCell />
      <RecentPostsCell />
    </>
  )
}

export default HomePage
