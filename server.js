/*
 * hapi-firebase-boilerplate
 * 2020 Guillaume Duhan <myhappyagency@gmail.com>
 * MIT License
 */

const Hapi = require('@hapi/hapi')
const dotenv = require('dotenv')
const chalk = require('chalk')
const laabr = require('laabr')

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' })

const resources = require('./services/resources.js')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })

    resources.firebase()

    await server.register(require('./config/router'))
    await server.register({
        plugin: laabr,
        options: {
            formats: {
                onPostStart: ':status',
                request: ':method :remoteAddress :url :status :payload (:responseTime ms)',
                response: `:method - ${chalk.magenta(':remoteAddress')} - ${chalk.gray(':url')} - ${chalk.green(':status')} - (:responseTime ms)`,
            },
        },
    })
    await server.start()
    .then(() => {
      console.log(chalk.bgKeyword('green').bold(' SERVER LAUNCHED '))
      console.log(chalk.bgKeyword('green').keyword('black')(chalk.bold(' ' + server.info.uri + ' ')))
    })
    .catch((err) => console.log(err))
}

process.on('unhandledRejection', (err) => {
    console.log(chalk.bold(chalk.bgKeyword('red')('❌ error:')))
    console.log(chalk.bold(err))
    throw err
    process.exit(1)
})

init()
