import { useCallback } from "react"
import { Post } from "types/graphql"

interface Props {
  article: Post
}

const SingleArticle = ({ article }: Props) => {
  const { body, createdAt, subtitle, title, image } = article

  const timeCalculate = useCallback(() => {
    const currDate = new Date()
    const diffTime = Math.abs(currDate.getTime() - new Date(createdAt).getTime())
    const differentTimes = {
      seconds: diffTime / (1000),
      minutes: diffTime / (1000 * 60),
      hours: diffTime / (1000 * 60 * 60),
      days: diffTime / (1000 * 60 * 60 * 24),
      months: diffTime / (1000 * 60 * 60 * 24 * 12),
    }
    if (differentTimes.seconds < 1) {
      return `${Math.ceil(differentTimes.seconds)} second(s) ago`
    }
    if (differentTimes.minutes < 1) {
      return `${Math.ceil(differentTimes.minutes)} minute(s) ago`
    }
    if (differentTimes.hours < 1) {
      return `${Math.ceil(differentTimes.hours)} hour(s) ago`
    }
    if (differentTimes.days < 1) {
      return `${Math.ceil(differentTimes.days)} day(s) ago`
    }
    if (differentTimes.months < 1) {
      return `${Math.ceil(differentTimes.months)} month(s) ago`
    }
    return "Publish time unknown"
  }, [createdAt])

  return (
    <div>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <span>{timeCalculate()}</span>
      <p>{subtitle}</p>
      <img width={100} height={100} src={image} alt={image} />
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  )
}

export default SingleArticle
