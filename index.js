require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const server = require('http').createServer(app)
const logger = require('./utils/logger')
const userAgent = require('express-useragent')

const PORT = process.env.APP_PORT || 5000

app.use(helmet())
app.use(userAgent.express())
app.use(express.json({ strict: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const corsOptions = {
    credentials: true,
    origin: [process.env.DEV_CLIENT_URL],
}

app.use(cors(corsOptions))

app.use((err, req, res, next) => {
    if (err) {
        logger.critical(err, `middleware error`)
    }
})

// Router
app.use('/hello', (req, res) => { res.json({ message: "Ураанхайдар!" }) })

function start() {
    try {
        server.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`)
            logger.info(`Server started on PORT = ${PORT}`)
        })
    } catch (error) {
        logger.critical(`Error start app`, error)
    }
}

start()