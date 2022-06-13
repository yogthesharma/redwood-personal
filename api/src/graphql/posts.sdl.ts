export const schema = gql`
  type Post {
    id: Int!
    title: String!
    subtitle: String!
    body: String!
    image: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    subtitle: String!
    body: String!
    image: String!
  }

  input UpdatePostInput {
    title: String
    subtitle: String
    body: String
    image: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
