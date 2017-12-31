import moment from 'moment'
import mongoose, { Schema, Types } from 'mongoose'

const Comment = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => {
            return Types.ObjectId()
        }
    },
    foodId: {
        type: Schema.Types.String,
        required: true,
    },
    commentBy: {
        type: Schema.Types.String,
        required: true
    },
    content: {
        type: Schema.Types.String,
        required: true
    },
    createAt: {
        type: Schema.Types.String,
        default: () => {
            return moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    }
})