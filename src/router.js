const logger = require('./utils/logger')

// const commRouter = require('../api/comment')

const router = (app) => {
    app.use('/test', loggerMiddleware, (req, res) => { res.json({ message: "test" }) })
}

// middleware для логирования HTTP запросов
function loggerMiddleware(req, res, next) {
    logger.info(`${req?.method} ${req?.url}`)
    next()
}

module.exports = { router }