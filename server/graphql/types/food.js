export default `
    type FOOD_TYPE {
        id: String,
        name: String,
        discription: String,
        categories: [String],
        eatary: JSON,
        images: [String],
        isOpening: Boolean,
        score: JSON
        createAt: String!,
        updateAt: String!
    }
`