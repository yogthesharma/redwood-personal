import {
  aboutDetails,
  aboutDetail,
  createAboutDetail,
  updateAboutDetail,
  deleteAboutDetail,
} from './aboutDetails'
import type { StandardScenario } from './aboutDetails.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('aboutDetails', () => {
  scenario('returns all aboutDetails', async (scenario: StandardScenario) => {
    const result = await aboutDetails()

    expect(result.length).toEqual(Object.keys(scenario.aboutDetail).length)
  })

  scenario(
    'returns a single aboutDetail',
    async (scenario: StandardScenario) => {
      const result = await aboutDetail({ id: scenario.aboutDetail.one.id })

      expect(result).toEqual(scenario.aboutDetail.one)
    }
  )

  scenario('creates a aboutDetail', async () => {
    const result = await createAboutDetail({
      input: { title: 'String', subtitle: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.subtitle).toEqual('String')
  })

  scenario('updates a aboutDetail', async (scenario: StandardScenario) => {
    const original = await aboutDetail({ id: scenario.aboutDetail.one.id })
    const result = await updateAboutDetail({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a aboutDetail', async (scenario: StandardScenario) => {
    const original = await deleteAboutDetail({
      id: scenario.aboutDetail.one.id,
    })
    const result = await aboutDetail({ id: original.id })

    expect(result).toEqual(null)
  })
})
