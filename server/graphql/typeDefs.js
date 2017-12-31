export default `
    scalar JSON

    type Query {
        SignIn(username: String!, password: String!): USER_TYPE
    }

    type Mutation {
        AddUser(username: String!, password: String!): USER_TYPE
    }
`