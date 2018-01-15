const unauthorized = (res) => {
    res.status(401)
    return `${res.statusCode}: Unauthorized.`
}

export default unauthorized