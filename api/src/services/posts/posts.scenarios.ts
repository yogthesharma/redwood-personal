import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        subtitle: 'String',
        body: 'String',
        image: 'String',
        tags: 'String',
        author: 'Yog_Sharma',
      },
    },
    two: {
      data: {
        title: 'String',
        subtitle: 'String',
        body: 'String',
        image: 'String',
        tags: 'String',
        author: 'Yog_Sharma',
      },
    },
  },
})

export type StandardScenario = typeof standard
