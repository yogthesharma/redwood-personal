export const schema = gql`
  type AboutDetail {
    id: String!
    title: String!
    subtitle: String!
  }

  type Query {
    aboutDetails: [AboutDetail!]! @skipAuth
    aboutDetail(id: String!): AboutDetail @skipAuth
  }

  input CreateAboutDetailInput {
    title: String!
    subtitle: String!
  }

  input UpdateAboutDetailInput {
    title: String
    subtitle: String
  }

  type Mutation {
    createAboutDetail(input: CreateAboutDetailInput!): AboutDetail! @requireAuth
    updateAboutDetail(id: String!, input: UpdateAboutDetailInput!): AboutDetail!
      @requireAuth
    deleteAboutDetail(id: String!): AboutDetail! @requireAuth
  }
`
