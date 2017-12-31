import {
    makeExecutableSchema
} from 'graphql-tools'
import * as types from './types'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

export default makeExecutableSchema({
    typeDefs: [
        typeDefs,
        types.USER_TYPE,
        types.FOOD_TYPE,
        types.COMMENT_TYPE
    ],
    resolvers
})