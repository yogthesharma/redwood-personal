import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
  return (
    <>
      <h1 className="text-2xl font-semibold">{about.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: about.subtitle }} />
    </>
  )
}
