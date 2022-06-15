export const schema = gql`
  type HomeDetail {
    id: String!
    title: String!
    subtitle: String!
  }

  type Query {
    homeDetails: [HomeDetail!]! @skipAuth
    homeDetail(id: String!): HomeDetail @skipAuth
  }

  input CreateHomeDetailInput {
    title: String!
    subtitle: String!
  }

  input UpdateHomeDetailInput {
    title: String
    subtitle: String
  }

  type Mutation {
    createHomeDetail(input: CreateHomeDetailInput!): HomeDetail! @requireAuth
    updateHomeDetail(id: String!, input: UpdateHomeDetailInput!): HomeDetail!
      @requireAuth
    deleteHomeDetail(id: String!): HomeDetail! @requireAuth
  }
`
