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
    console.log(chalk.bold(chalk.green('👍 New user: ', userRecord.email)))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 ' + error)))
    return false
  })
}

exports.updateUser = async (uid, email, password) => {
  return admin.auth().updateUser(uid, {
    email: email,
    password: password,
  })
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(chalk.bold(chalk.green('👍 User updated: ', userRecord)))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 ' + error)))
    return false
  })
}
