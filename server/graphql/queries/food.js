import Food from '../../models/food'

const SearchWithFilters = (_, args) => {
    var { filters, limit } = args
    var options = {}

    if (filters.name) {
        Object.assign(options, {
            // name: {
            //     '$regex': filters.name,
            //     '$options': 'i'
            // }
            name: {
                $search: filters.name
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

        Food
        // .aggregate([{
        //     $match: {
        //         $text: {
        //             $search: filters.name
        //         }
        //     }
        // }, {
        //     $group: {
        //         _id: { name: '$name' }
        //     }
        // }])
        // .then(result => {
        //     console.log(result)
        //     return resolve(result)
        // })
        // .catch(error => {
        //     return reject(error)
        // })
        .find({
            $text: {
                $search: filters.name
            }
        }, (error, foods) => {
            if (error) return reject(error)

            console.log(foods.length)

            return resolve(foods)
        })
        .sort().limit((limit) ? limit : 1000)
    })
}

export {
    SearchWithFilters
}