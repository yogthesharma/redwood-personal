import { MetaTags } from '@redwoodjs/web'
import HomeDetailCell  from 'src/components/HomeDetailsCell'
import RecentPostsCell from "src/components/RecentPostsCell"
import TimelineCell from 'src/components/TimelineCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <HomeDetailCell />
      <RecentPostsCell />
      <TimelineCell />
    </>
  )
}

export default HomePage
