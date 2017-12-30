import {
    makeExecutableSchema
} from 'graphql-tools'
import * as types from './types'
import resolvers from './resolvers'

const typeDefs = `
    scalar JSON

    type Query {
        SignIn(username: String!, password: String!): USER_TYPE
    }

    type Mutation {
        AddUser(username: String!, password: String!): USER_TYPE
    }
`

export default makeExecutableSchema({
    typeDefs: [typeDefs, types.USER_TYPE],
    resolvers
})