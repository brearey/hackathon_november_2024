const pino = require('pino')

const transport = pino.transport({
    targets: [
        {
            target: 'pino-pretty',
            level: 'info',
            options: {
                translateTime: 'SYS:HH:MM:ss dd-mm-yyyy',
                ignore: 'pid,hostname',
                colorize: false,
                destination: '../../logs/app.log',
                mkdir: true
            }
        },
        {
            target: 'pino-pretty',
            level: 'error',
            options: {
                translateTime: 'SYS:HH:MM:ss dd-mm-yyyy',
                ignore: 'pid,hostname',
                colorize: false,
                destination: '../../logs/errors.log',
                mkdir: true
            }
        },
        {
            target: 'pino-pretty',
            level: 'critical',
            options: {
                translateTime: 'SYS:HH:MM:ss dd-mm-yyyy',
                ignore: 'pid,hostname',
                colorize: false,
                destination: '../../logs/errors.log',
                mkdir: true
            }
        }
    ]
})

const pino_logger = pino(transport)

const logger = {
    info: (data, message = '') => {
        pino_logger.info(data, message)
        console.log(data, message)
    },
    error: (message) => {
        pino_logger.error(data, message)
        console.error(data, message)
    },
    critical: (message) => {
        pino_logger.critical(data, message)
        console.error(data, message)
    }
}

module.exports = logger
