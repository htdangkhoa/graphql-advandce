import axios from 'axios'
import mongoose from 'mongoose'
import Food from './server/models/food'

mongoose.connect('mongodb://localhost:27017/easy_graphql', (error, db) => {
    if (error) return console.log(error)

    return console.log('Connect successful')
})

var arrKey = ['gà', 'vịt', 'dê', 'nướng', 'gỏi', 'lẩu', 'bún', 'hủ tiếu', 'mì', 'bún bò']
var limit = 20
var count = 0

for (var i = 0; i < arrKey.length; i++) {
    new Promise((rs, rj) => {
        rs(createData(arrKey[i], i))
    })
}

function createData(key) {
    axios.request({
        url: 'https://latte.lozi.vn/v1.2/search/blocks',
        method: 'get',
        params: {
            q: key,
            skip: 0,
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
                        categories: dish.eatery.categories,
                        eatary: {
                            name: dish.eatery.name,
                            address: dish.eatery.address.full
                        },
                        images: newArr
                    }).save((e, r) => {
                        if (e) return reject(e)

                        console.log(r)
                        if (count === (arrKey.length * limit) - 1) return resolve(process.exit())
                        
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
        console.log({
            status: error.status,
            statusText: error.statusText
        })
    })
}