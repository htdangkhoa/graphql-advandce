export default `
    scalar JSON

    type Query {
        SignIn(username: String!, password: String!): USER_TYPE,
        SearchWithFilters(filters: JSON!, skip: Int, limit: Int): [FOOD_TYPE]
    }

    type Mutation {
        AddUser(username: String!, password: String!): USER_TYPE
    }
`