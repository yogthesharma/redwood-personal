export const schema = gql`
  type Timeline {
    id: String!
    title: String!
    subtitle: String!
    year: years!
  }

  enum years {
    y2021
    y2020
    y2018
    y2022
    y2016
    y2011
    y2000
    y2023
    y2024
    y2025
    y2026
    y2027
    y2028
    y2029
    y2030
  }

  type Query {
    timelines: [Timeline!]! @skipAuth
    timeline(id: String!): Timeline @skipAuth
  }

  input CreateTimelineInput {
    title: String!
    subtitle: String!
    year: years!
  }

  input UpdateTimelineInput {
    title: String
    subtitle: String
    year: years
  }

  type Mutation {
    createTimeline(input: CreateTimelineInput!): Timeline! @requireAuth
    updateTimeline(id: String!, input: UpdateTimelineInput!): Timeline!
      @requireAuth
    deleteTimeline(id: String!): Timeline! @requireAuth
  }
`
