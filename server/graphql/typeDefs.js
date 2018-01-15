export default `
    scalar JSON

    type Query {
        SignIn(email: String!, password: String!): USER_TYPE,
        Logout: String,
        SearchWithFilters(filters: JSON!, skip: Int, limit: Int): [FOOD_TYPE]
    }

    type Mutation {
        SignUp(email: String!, password: String!): USER_TYPE
    }
`