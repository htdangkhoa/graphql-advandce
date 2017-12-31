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
        required: true
    },
    categories: {
        type: Schema.Types.Mixed,
        required: true
    },
    address: {
        type: Schema.Types.String,
        required: true
    },
    images: {
        type: Schema.Types.Mixed
    },
    viewTotal: {
        type: Schema.Types.Number
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