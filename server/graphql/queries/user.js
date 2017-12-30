import User from '../../models/user'

const SignIn = (_, args) => {
    var { username, password } = args

    return new Promise((resolve, reject) => {
        User.findOne({
            username
        }, (error, user) => {
            if (error) return reject(error)

            if (!user) return reject('User not found.')

            user.comparePassword(password, (err, isMatch) => {
                if (err) return reject(err)

                if (!isMatch) reject('Username or password is incorrect!!!')

                return resolve(user)
            })
        })
    })
}

export {
    SignIn
}