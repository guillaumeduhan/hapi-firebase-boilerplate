/**
 * Resources
 */

'use strict'

const admin = require('firebase-admin')
const serviceAccount = require('../serviceAccountKey.json')
const chalk = require('chalk')

exports.initFirebase = () => {
  /*
     * Init your firebase app
     */
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://test-f9e7a.firebaseio.com',
  })
  console.log(chalk.bold(chalk.green('✅ Firebase')))
}
