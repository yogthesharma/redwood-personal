import EditTimelineCell from 'src/components/Timeline/EditTimelineCell'

type TimelinePageProps = {
  id: string
}

const EditTimelinePage = ({ id }: TimelinePageProps) => {
  return <EditTimelineCell id={id} />
}

export default EditTimelinePage
