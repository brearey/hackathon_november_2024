const pino = require('pino')

const transport = pino.transport({
    targets: [
        {
            target: 'pino-pretty',
            level: 'info',
            options: {
                translateTime: 'SYS:HH:MM:ss dd-mm-yyyy',
                ignore: 'pid,hostname',
                colorize: true,
                destination: './logs/app.log',
                mkdir: true
            }
        },
        {
            target: 'pino-pretty',
            level: 'error',
            options: {
                translateTime: 'SYS:HH:MM:ss dd-mm-yyyy',
                ignore: 'pid,hostname',
                colorize: true,
                destination: './logs/errors.log',
                mkdir: true
            }
        }
    ]
})

const logger = pino({
    redact: [
        '*.email',
        '*.hashed_password',
        '*.phone',
        '*.first_name',
        '*.last_name',
        '*.date_of_birth',
        '*.content',
    ],
    /*
     * Опция redact определяет массив полей, данные которых должны вырезаться при записи логов
     */
}, transport)

module.exports = logger
