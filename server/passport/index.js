import User from '../models/user'
import passport from 'passport'
import { encrypt, decrypt } from '../utils'

passport.serializeUser((user, next) => {
    var token = encrypt(JSON.stringify(user))

    return next(null, {token})
})

passport.deserializeUser((session, next) => {
    console.log(session)
    var user = JSON.parse(decrypt(session.token))

    User.findOne({ _id: user._id })
    .then(user => {
        if (!user) return next(null, false)

        return next(null, user)
    })
    .catch(error => {
        return next(error)
    })
})

export default passport