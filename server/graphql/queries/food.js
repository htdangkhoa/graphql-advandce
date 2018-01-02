import Food from '../../models/food'

const SearchWithFilters = (_, args) => {
    var { filters, skip, limit } = args
    var options = {}
    
    if (JSON.stringify(filters) === '{}') throw `Oh, what's happening? Fucking wow shit...`

    /**
     * Filter with name.
     */
    if (filters.name) {
        Object.assign(options, {
            name: {
                '$regex': filters.name,
                '$options': 'i'
            }
        })
    }

    /**
     * Filter with categories.
     */
    if (filters.categories) {
        Object.assign(options, {
            $or: [
                { 
                    'categories': filters.categories 
                }
            ]
        })
    }

    /**
     * Filter with district.
     */
    if (filters.district) {
        Object.assign(options, {
            $or: [
                {
                    'eatary.district': { 
                        '$regex': filters.district,
                        '$options': 'i'
                    }
                }
            ]
        })
    }

    /**
     * Filter with city.
     */
    if (filters.city) {
        Object.assign(options, {
            $or: [
                {
                    'eatary.city': { 
                        '$regex': filters.city,
                        '$options': 'i'
                    }
                }
            ]
        })
    }

    /**
     * Filter with street.
     */
    if (filters.street) {
        Object.assign(options, {
            $or: [
                {
                    'eatary.street': { 
                        '$regex': filters.street,
                        '$options': 'i'
                    }
                }
            ]
        })
    }

    console.log(options)

    return new Promise((resolve, reject) => {
        if (limit && limit > 20) return reject('Limit is too large.')

        Food
        .find(options, (error, foods) => {
            if (error) return reject(error)

            return resolve(foods)
        })
        .sort()
        .skip((skip) ? skip : 0)
        .limit((limit) ? limit : 10)
    })
}

export {
    SearchWithFilters
}