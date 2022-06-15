import HomeDetailCell from 'src/components/HomeDetail/HomeDetailCell'

type HomeDetailPageProps = {
  id: string
}

const HomeDetailPage = ({ id }: HomeDetailPageProps) => {
  return <HomeDetailCell id={id} />
}

export default HomeDetailPage
