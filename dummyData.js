import axios from 'axios'
import mongoose from 'mongoose'
import Food from './server/models/food'

mongoose.connect('mongodb://localhost:27017/easy_graphql', (error, db) => {
    if (error) return console.log(error)

    return console.log('Connect successful')
})

var arrKey = ['gà', 'vịt', 'dê', 'nướng', 'gỏi', 'lẩu', 'bún', 'hủ tiếu', 'mì', 'bún bò']
var skip = 5
var limit = 30
var count = 0

for (var j = 0; j < skip; j++) {
    new Promise((resolve, reject) => {
        resolve(createDataWithSkip(j))
    })
}

function createDataWithSkip(__skip) {
    for (var i = 0; i < arrKey.length; i++) {
        new Promise((rs, rj) => {
            createData(arrKey[i], __skip, error => {
                if (error) {
                    var { status, statusText } = error.response
                    console.log({
                        status,
                        statusText
                    })
                    return rj(process.exit())
                }

                return rs()
            })
        })
    }
}

function createData(key, __skip, cb) {
    axios.request({
        url: 'https://latte.lozi.vn/v1.2/search/blocks',
        method: 'get',
        params: {
            q: key,
            skip: __skip,
            limit,
            t: 'popular',
            cityId: 50
        }
    })
    .then(function(res) {
        var { data } = res.data
    
        for (var i = 0; i < data.length; i++) {
            new Promise((resolve, reject) => {
                var { dish } = data[i]
                var { slug } = data[i]
                var { caption } = data[i]
    
                axios.request({
                    url: 'https://latte.lozi.vn/v1.2/blocks/slug:' + slug + '/images'
                })
                .then(response => {
                    var newArr = []
                    var listImage = response.data.data
                    
                    listImage.forEach(element => {
                        newArr.push(element.image)
                    });
                    
                    new Food({
                        name: dish.food.name,
                        discription: caption,
                        categories: dish.eatery.categories,
                        eatary: {
                            name: dish['eatery']['name'],
                            full: dish['eatery']['address']['full'],
                            street: dish['eatery']['address']['street'],
                            district: dish['eatery']['address']['district'],
                            city: dish['eatery']['address']['city']
                        },
                        images: newArr
                    }).save((e, r) => {
                        if (e) return reject(e)

                        console.log(r)
                        if (count === (arrKey.length * limit * skip) - 1) return resolve(process.exit())
                        
                        count += 1
                        resolve(count)
                    })
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        }
    })
    .catch(function(error) {
        cb(error)
    })
}