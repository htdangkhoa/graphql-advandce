export default `
    scalar JSON

    type Query {
        SignIn(username: String!, password: String!): USER_TYPE,
        SearchWithFilters(filters: JSON!, limit: Int): [FOOD_TYPE]
    }

    type Mutation {
        AddUser(username: String!, password: String!): USER_TYPE
    }
`