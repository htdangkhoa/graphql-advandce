import User from '../../models/user'
import passport from '../../passport'
import { unauthorized } from '../../utils'

const SignIn = (_, args, context) => {
    var { email, password } = args
    var { req, res } = context

    return new Promise((resolve, reject) => {
        User.findOne({
            email
        }, (error, user) => {
            if (error) return reject(error)

            if (!user) return reject(unauthorized(res))

            user.comparePassword(password, (err, isMatch) => {
                if (err) return reject(err)

                if (!isMatch) return reject(unauthorized(res))

                var { _id } = user

                req.login({ _id, email }, e => {
                    if (e) return reject(e)

                    return resolve({ _id, email })
                })
            })
        })
    })
}

const Logout = (_, args, context) => {
    var { req } = context

    req.logout();
    req.session.destroy();

    return 'Logout successful'
}

export {
    SignIn,
    Logout,
}