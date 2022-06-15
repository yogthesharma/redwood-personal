export const schema = gql`
  type Post {
    id: String!
    title: String!
    subtitle: String!
    body: String!
    image: String!
    createdAt: DateTime!
  }


  type Query {
    recentPosts: [Post!]! @skipAuth
    posts: [Post!]! @skipAuth
    post(id: String!): Post @skipAuth
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
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
