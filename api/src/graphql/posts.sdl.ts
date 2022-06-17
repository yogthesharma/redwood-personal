export const schema = gql`
  type Post {
    id: String!
    title: String!
    subtitle: String!
    body: String!
    image: String!
    tags: String!
    author: author!
    createdAt: DateTime!
  }

  enum author {
    Yog_Sharma
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
    tags: String!
    author: author!
  }

  input UpdatePostInput {
    title: String
    subtitle: String
    body: String
    image: String
    tags: String
    author: author
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
