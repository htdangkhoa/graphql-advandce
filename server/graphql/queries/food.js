import Food from '../../models/food'

const SearchWithFilters = (_, args) => {
    var { filters, limit } = args
    var options = {}

    if (filters.name) {
        Object.assign(options, {
            name: {
                '$regex': filters.name,
                '$options': 'i'
            }
        })
    }

    if (filters.categories) {
        Object.assign(options, {
            $or: [
                {'categories': filters.categories}
            ]
        })
    }

    console.log(options)

    return new Promise((resolve, reject) => {
        if (limit && limit > 20) return reject('Limit is too large.')

        Food.find(options, (error, foods) => {
            if (error) return reject(error)

            return resolve(foods)
        }).sort().limit((limit) ? limit : 5)
    })
}

export {
    SearchWithFilters
}