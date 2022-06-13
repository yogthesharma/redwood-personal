import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const aboutDetails: QueryResolvers['aboutDetails'] = () => {
  return db.aboutDetail.findMany()
}

export const aboutDetail: QueryResolvers['aboutDetail'] = ({ id }) => {
  return db.aboutDetail.findUnique({
    where: { id },
  })
}

export const createAboutDetail: MutationResolvers['createAboutDetail'] = ({
  input,
}) => {
  return db.aboutDetail.create({
    data: input,
  })
}

export const updateAboutDetail: MutationResolvers['updateAboutDetail'] = ({
  id,
  input,
}) => {
  return db.aboutDetail.update({
    data: input,
    where: { id },
  })
}

export const deleteAboutDetail: MutationResolvers['deleteAboutDetail'] = ({
  id,
}) => {
  return db.aboutDetail.delete({
    where: { id },
  })
}
