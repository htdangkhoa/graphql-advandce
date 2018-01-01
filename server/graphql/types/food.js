export default `
    type FOOD_TYPE {
        id: String,
        name: String,
        categories: [String],
        eatary: JSON,
        images: [String],
        isOpening: Boolean,
        score: JSON
        createAt: String!,
        updateAt: String!
    }
`