import { useCallback, useEffect, useMemo } from 'react'
import { Post } from 'types/graphql'
import { compiler } from 'markdown-to-jsx'

import styles from './index.module.scss'

interface Props {
  article: Post
}

const SingleArticle = ({ article }: Props) => {
  const { body, createdAt, subtitle, title, image } = article

  const timeCalculate = useCallback(() => {
    const currDate = new Date()
    const diffTime = Math.abs(
      currDate.getTime() - new Date(createdAt).getTime()
    )
    const differentTimes = {
      seconds: diffTime / 1000,
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
    return 'Publish time unknown'
  }, [createdAt])

  const str = `${body}`
  const blogData = useMemo(() => compiler(str), [body])
  useEffect(() => {
    console.log(body, blogData)
  }, [])

  return (
    <div className="mt-10">
      <h2 className="text-5xl font-bold text-red-500">{title}</h2>
      <div className="flex text-sm mt-4 my-2 text-gray-400">
        <p>{article.author.replace('_', ' ')}</p>
        <p className="mx-2">&#x007C;</p>
        <p>{timeCalculate()}</p>
      </div>
      <p className="font-extralight text-white-500 text-xl">{subtitle}</p>
      <img className="w-full my-4" src={image} alt={image} />
      <div className={`${styles.blogData} text-white-400 font-light`}>
        {blogData}
      </div>
    </div>
  )
}

export default SingleArticle
