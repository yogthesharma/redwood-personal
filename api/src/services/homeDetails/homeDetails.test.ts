import {
  homeDetails,
  homeDetail,
  createHomeDetail,
  updateHomeDetail,
  deleteHomeDetail,
} from './homeDetails'
import type { StandardScenario } from './homeDetails.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('homeDetails', () => {
  scenario('returns all homeDetails', async (scenario: StandardScenario) => {
    const result = await homeDetails()

    expect(result.length).toEqual(Object.keys(scenario.homeDetail).length)
  })

  scenario(
    'returns a single homeDetail',
    async (scenario: StandardScenario) => {
      const result = await homeDetail({ id: scenario.homeDetail.one.id })

      expect(result).toEqual(scenario.homeDetail.one)
    }
  )

  scenario('creates a homeDetail', async () => {
    const result = await createHomeDetail({
      input: { title: 'String', subtitle: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.subtitle).toEqual('String')
  })

  scenario('updates a homeDetail', async (scenario: StandardScenario) => {
    const original = await homeDetail({ id: scenario.homeDetail.one.id })
    const result = await updateHomeDetail({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a homeDetail', async (scenario: StandardScenario) => {
    const original = await deleteHomeDetail({ id: scenario.homeDetail.one.id })
    const result = await homeDetail({ id: original.id })

    expect(result).toEqual(null)
  })
})
