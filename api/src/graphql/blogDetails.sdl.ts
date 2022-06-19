export const schema = gql`
  type BlogDetail {
    id: String!
    title: String!
    subtitle: String!
  }

  type Query {
    blogDetails: [BlogDetail!]! @skipAuth
    blogDetail(id: String!): BlogDetail @skipAuth
  }

  input CreateBlogDetailInput {
    title: String!
    subtitle: String!
  }

  input UpdateBlogDetailInput {
    title: String
    subtitle: String
  }

  type Mutation {
    createBlogDetail(input: CreateBlogDetailInput!): BlogDetail! @requireAuth
    updateBlogDetail(id: String!, input: UpdateBlogDetailInput!): BlogDetail!
      @requireAuth
    deleteBlogDetail(id: String!): BlogDetail! @requireAuth
  }
`
