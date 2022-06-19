import { useMemo } from 'react'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { compiler } from 'markdown-to-jsx'

export const QUERY = gql`
  query AboutDetailsQuery {
    aboutDetails {
      id
      title
      subtitle
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ aboutDetails }: CellSuccessProps) => {
  const about = aboutDetails[0]
  const detailsMd = useMemo(() => compiler(about.subtitle), [])

  return (
    <div className='mt-14'>
      <h1 className="text-5xl font-semibold text-red-500">{about.title}</h1>
      <div className='aboutDetails text-justify child:my-2 font-light mt-4'>{detailsMd}</div>
    </div>
  )
}
