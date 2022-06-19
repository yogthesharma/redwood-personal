import type { HomeDetailsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query HomeDetailsQuery {
    homeDetails {
      id
      subtitle
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  homeDetails,
}: CellSuccessProps) => {
  const { title, subtitle } = homeDetails[0]
  return (
    <div className='mt-10'>
      <h1 className='text-red-500 lg:text-6xl font-bold'>
        {title}
      </h1>
      <p className='lg:mt-4 font-light text-base'>{subtitle}</p>
    </div>
  )
}
