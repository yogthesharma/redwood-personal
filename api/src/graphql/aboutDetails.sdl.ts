export const schema = gql`
  type AboutDetail {
    id: Int!
    title: String!
    subtitle: String!
  }

  type Query {
    aboutDetails: [AboutDetail!]! @skipAuth
    aboutDetail(id: Int!): AboutDetail @skipAuth
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
    updateAboutDetail(id: Int!, input: UpdateAboutDetailInput!): AboutDetail!
      @requireAuth
    deleteAboutDetail(id: Int!): AboutDetail! @requireAuth
  }
`
