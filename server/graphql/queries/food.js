import Food from '../../models/food'

const SearchWithFilters = (_, args) => {
    var { filters, skip, limit } = args
    var options = {
        $and: []
    }
    
    if (JSON.stringify(filters) === '{}') throw `Oh, what's happening? Fucking wow shit...`

    /**
     * Filter with name.
     */
    if (filters.name) {
        options['$and'].push({
            'name': {
                '$regex': filters.name,
                '$options': 'i'
            }
        })
    }

    /**
     * Filter with categories.
     */
    if (filters.categories) {
        options['$and'].push({ 
            'categories': filters.categories
        })
    }

    /**
     * Filter with district.
     */
    if (filters.district) {
        options['$and'].push({ 
            'eatary.district': filters.district
        })
    }

    /**
     * Filter with city.
     */
    if (filters.city) {
        options['$and'].push({ 
            'eatary.city': {
                '$regex': filters.city,
                '$options': 'i'
            }
        })
    }

    /**
     * Filter with street.
     */
    if (filters.street) {
        options['$and'].push({ 
            'eatary.street': {
                '$regex': filters.street,
                '$options': 'i'
            }
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