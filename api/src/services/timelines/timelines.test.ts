import {
  timelines,
  timeline,
  createTimeline,
  updateTimeline,
  deleteTimeline,
} from './timelines'
import type { StandardScenario } from './timelines.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('timelines', () => {
  scenario('returns all timelines', async (scenario: StandardScenario) => {
    const result = await timelines()

    expect(result.length).toEqual(Object.keys(scenario.timeline).length)
  })

  scenario('returns a single timeline', async (scenario: StandardScenario) => {
    const result = await timeline({ id: scenario.timeline.one.id })

    expect(result).toEqual(scenario.timeline.one)
  })

  scenario('creates a timeline', async () => {
    const result = await createTimeline({
      input: { title: 'String', subtitle: 'String', year: 'y2021' },
    })

    expect(result.title).toEqual('String')
    expect(result.subtitle).toEqual('String')
    expect(result.year).toEqual('y2021')
  })

  scenario('updates a timeline', async (scenario: StandardScenario) => {
    const original = await timeline({ id: scenario.timeline.one.id })
    const result = await updateTimeline({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a timeline', async (scenario: StandardScenario) => {
    const original = await deleteTimeline({ id: scenario.timeline.one.id })
    const result = await timeline({ id: original.id })

    expect(result).toEqual(null)
  })
})
