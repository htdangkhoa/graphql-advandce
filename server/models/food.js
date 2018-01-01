import uuid from 'uuid'
import moment from 'moment'
import mongoose, { Schema, Types } from 'mongoose'

const Food = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => {
            return Types.ObjectId()
        }
    },
    id: {
        type: Schema.Types.String,
        unique: true,
        default: () => {
            return uuid.v4()
        }
    },
    name: {
        type: Schema.Types.String,
        required: true,
        index: true
    },
    discription: {
        type: Schema.Types.String
    },
    categories: {
        type: Schema.Types.Mixed,
        required: true,
        index: true
    },
    eatary: {
        /**
         * Child data is a json including 
         * name of restaurant
         * and
         * address of restarant
         * @example:
         * {
         *  name: 'abc'
         *  address: 'abc xyz'
         * }
         */
        type: Schema.Types.Mixed
    },
    images: {
        type: Schema.Types.Mixed
    },
    isOpening: {
        type: Schema.Types.Boolean,
        default: false
    },
    score: {
        type: Schema.Types.Mixed,
        default: () => {
            return {
                total: 0,
                count: 0,
                average: 0
            }
        }
    },
    createAt: {
        type: Schema.Types.String,
        default: () => {
            return moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    },
    updateAt: {
        type: Schema.Types.String,
        default: () => {
            return moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    }
})

export default mongoose.model('food', Food)