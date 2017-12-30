import User from '../../models/user'

const AddUser = (root, args) => {
    var { username, password } = args
    return new Promise((resolve, reject) => {
        new User({
            username,
            password
        }).save((error, user) => {
            if (error) return reject(error)

            return resolve(user)
        })
    })
}

export {
    AddUser
}