require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const app = express()
const logger = require('./utils/logger')
const { router } = require('./router.js')

const PORT = process.env.APP_PORT || 5000

app.use(helmet())
app.use(express.json({ strict: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use((err, req, res, next) => {
    if (err) {
        logger.critical(err, `middleware error`)
    }
})

// Router

try {
    router(app)
} catch (error) {
    logger.error(error, 'router error')
}

function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`)
            logger.info(`Server started on PORT = ${PORT}`)
        })
    } catch (error) {
        logger.critical(`Error start app`, error)
    }
}

start()