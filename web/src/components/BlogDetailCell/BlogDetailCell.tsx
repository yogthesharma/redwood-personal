import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindBlogDetailQuery {
    blogDetails {
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

export const Success = ({ blogDetails }: CellSuccessProps) => {
  const { title, subtitle } = blogDetails[0]
  return (
    <div className='mt-10'>
      <h1 className='text-5xl font-semibold text-red-500'>
        {title}
      </h1>
      <p className='lg:aboutDetails text-justify child:my-2 font-light mt-4'>{subtitle}</p>
    </div>
  )
}


// http://localhost:3000/callback?code=AQAJaiqIEanzID-Z7LcvnbEdb_3iAIWMKQZnGajuAEuXJJC6usPdITY-n68jVvytDMmYARPpm1GngfdksWG240BftKJwg40Wjz26RNlWPXJhAybrU2XUvQoHZ713oKxOuWw1z-2syhAvJ0fz0ogomsgc0vZseH9o9SGI_sWcx2TikYBLSOkX-E3ozITzhiSqSvrikI2teZYx96JNT4KN&state=hyhujiknbvcxfdgh

//  curl -d client_id=e6aa6e058ddd48e3aeaa9d8e21d164ee -d client_secret=d6e5eef1288f44a8bc83f22f060655c8 -d grant_type=authorization_code -d code=AQCfrschvfZ9ImuMBHrtMginkchWBPKDmTDdN10XZ5L2nTmp5dslzh_X1GqfyOHbnK4mUKlwHtNim5xxVQ1Q0ymmixsMQJicG2H5j9LOrXJK6Zo-LfE_Dq64Ov0JJnqGPkw10ThmKDS_TQWJ1pD6BR7iLhMW0lt0MTjOy1GTYIrTYgIUFG7vjzPkXWZwPXduAvn6qi4mB_Q8L6CLDe8g&state=hyhujiknbvcxfdgh -d redirect_uri=http://localhost:3000/callback https://accounts.spotify.com/api/token
