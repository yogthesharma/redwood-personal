import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        subtitle: 'String',
        body: 'String',
        image: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        subtitle: 'String',
        body: 'String',
        image: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
