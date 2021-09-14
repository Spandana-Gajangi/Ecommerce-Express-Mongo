const errorHandler = (err, req, res, next) => {
    res.status(500)
    res.send({ error: 'Internal server error' })
}

module.exports.errorHandler = errorHandler;