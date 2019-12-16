/*
 * User controller
 */

'use strict'

const admin = require('firebase-admin')
const chalk = require('chalk')

exports.createUser = async (email, password) => {
  return admin.auth().createUser({
    email: email,
    password: password,
  })
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(chalk.bold(chalk.blue('👍 Successfully created new user:', userRecord.email)))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 ' + error)))
    return false
  })
}
