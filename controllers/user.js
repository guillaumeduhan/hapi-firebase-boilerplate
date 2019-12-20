/*
 * User controller
 */

'use strict'

const admin = require('firebase-admin')
const chalk = require('chalk')

exports.createUser = async (payload) => {
  return admin.auth().createUser({
    email: payload.email,
    password: payload.password,
  })
  .then(function(userRecord) {
    console.log(chalk.bold(chalk.green('👍 New user: ', userRecord.email)))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 Error creating user' + error)))
    return false
  })
}

exports.updateUser = async (uid, payload) => {
  return admin.auth().updateUser(uid, {
    email: payload.email,
    password: payload.password,
  })
  .then(function(userRecord) {
    console.log(chalk.bold(chalk.magenta('👍 User updated: ', userRecord)))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 Error updating user data' + error)))
    return false
  })
}

exports.getUser = async (uid) => {
  return admin.auth().getUser(uid)
  .then(function(userRecord) {
    console.log(chalk.bold(chalk.green('👍 User founded: ', userRecord.toJSON().email)))
    return userRecord.toJSON();
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 Error fetching user data' + error)))
    return false
  })
}
