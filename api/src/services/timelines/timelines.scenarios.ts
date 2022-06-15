import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TimelineCreateArgs>({
  timeline: {
    one: { data: { title: 'String', subtitle: 'String', year: 'y2021' } },
    two: { data: { title: 'String', subtitle: 'String', year: 'y2021' } },
  },
})

export type StandardScenario = typeof standard
