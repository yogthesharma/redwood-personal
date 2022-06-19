import {
  blogDetails,
  blogDetail,
  createBlogDetail,
  updateBlogDetail,
  deleteBlogDetail,
} from './blogDetails'
import type { StandardScenario } from './blogDetails.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blogDetails', () => {
  scenario('returns all blogDetails', async (scenario: StandardScenario) => {
    const result = await blogDetails()

    expect(result.length).toEqual(Object.keys(scenario.blogDetail).length)
  })

  scenario(
    'returns a single blogDetail',
    async (scenario: StandardScenario) => {
      const result = await blogDetail({ id: scenario.blogDetail.one.id })

      expect(result).toEqual(scenario.blogDetail.one)
    }
  )

  scenario('creates a blogDetail', async () => {
    const result = await createBlogDetail({
      input: { title: 'String', subtitle: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.subtitle).toEqual('String')
  })

  scenario('updates a blogDetail', async (scenario: StandardScenario) => {
    const original = await blogDetail({ id: scenario.blogDetail.one.id })
    const result = await updateBlogDetail({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a blogDetail', async (scenario: StandardScenario) => {
    const original = await deleteBlogDetail({ id: scenario.blogDetail.one.id })
    const result = await blogDetail({ id: original.id })

    expect(result).toEqual(null)
  })
})
