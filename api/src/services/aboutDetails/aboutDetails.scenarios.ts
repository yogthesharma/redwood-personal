import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AboutDetailCreateArgs>({
  aboutDetail: {
    one: { data: { title: 'String', subtitle: 'String' } },
    two: { data: { title: 'String', subtitle: 'String' } },
  },
})

export type StandardScenario = typeof standard
