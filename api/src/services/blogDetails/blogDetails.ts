import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const blogDetails: QueryResolvers['blogDetails'] = () => {
  return db.blogDetail.findMany()
}

export const blogDetail: QueryResolvers['blogDetail'] = ({ id }) => {
  return db.blogDetail.findUnique({
    where: { id },
  })
}

export const createBlogDetail: MutationResolvers['createBlogDetail'] = ({
  input,
}) => {
  return db.blogDetail.create({
    data: input,
  })
}

export const updateBlogDetail: MutationResolvers['updateBlogDetail'] = ({
  id,
  input,
}) => {
  return db.blogDetail.update({
    data: input,
    where: { id },
  })
}

export const deleteBlogDetail: MutationResolvers['deleteBlogDetail'] = ({
  id,
}) => {
  return db.blogDetail.delete({
    where: { id },
  })
}
