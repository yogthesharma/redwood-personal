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
  const { id, title, subtitle } = homeDetails[0]
  return (
    <>
    <div>
      <h1 className='text-5xl'>
        {title}
      </h1>
      <p>{subtitle}</p>
    </div>
    </>
  )
}
