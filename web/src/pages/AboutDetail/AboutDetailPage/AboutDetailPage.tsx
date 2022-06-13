import AboutDetailCell from 'src/components/AboutDetail/AboutDetailCell'

type AboutDetailPageProps = {
  id: number
}

const AboutDetailPage = ({ id }: AboutDetailPageProps) => {
  return <AboutDetailCell id={id} />
}

export default AboutDetailPage
