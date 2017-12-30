import mongoose from'mongoose'
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema
const saltRound = 10

const User = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => { return mongoose.Types.ObjectId() }
    },
    username: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    }
})

User.pre('save', function(next) {
    var user = this

    if (!user.isModified('password')) return next

    bcrypt.genSalt(saltRound, (error, salt) => {
        if (error) next(error)

        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash
            next()
        })
    })
})

User.methods.comparePassword = function(password, next) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
        if (error) next(error)
        
        next(null, isMatch)
    })
}

export default mongoose.model('user', User)