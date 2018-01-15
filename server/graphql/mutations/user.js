import User from '../../models/user'

const SignUp = (root, args) => {
    var { email, password } = args
    return new Promise((resolve, reject) => {
        new User({
            email,
            password
        }).save((error, user) => {
            if (error) return reject(error)

            return resolve(user)
        })
    })
}

export {
    SignUp
}