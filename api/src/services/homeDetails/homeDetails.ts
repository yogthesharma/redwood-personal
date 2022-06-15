import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const homeDetails: QueryResolvers['homeDetails'] = () => {
  return db.homeDetail.findMany()
}

export const homeDetail: QueryResolvers['homeDetail'] = ({ id }) => {
  return db.homeDetail.findUnique({
    where: { id },
  })
}

export const createHomeDetail: MutationResolvers['createHomeDetail'] = ({
  input,
}) => {
  return db.homeDetail.create({
    data: input,
  })
}

export const updateHomeDetail: MutationResolvers['updateHomeDetail'] = ({
  id,
  input,
}) => {
  return db.homeDetail.update({
    data: input,
    where: { id },
  })
}

export const deleteHomeDetail: MutationResolvers['deleteHomeDetail'] = ({
  id,
}) => {
  return db.homeDetail.delete({
    where: { id },
  })
}
