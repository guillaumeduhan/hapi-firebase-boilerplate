/*
 * User controller
 */

'use strict'

const admin = require('firebase-admin')
const chalk = require('chalk')
const _ = require('lodash')

exports.create = async (payload) => {
  return admin
  .auth()
  .createUser({
    email: payload.email,
    password: payload.password,
  })
  .then(function(userRecord) {
    console.log(chalk.bold(chalk.green('👍 New user: ', JSON.stringify(userRecord))))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 Error creating user' + error)))
    return false
  })
}

exports.delete = async (uid) => {
  return admin
  .auth()
  .deleteUser(uid)
  .then(function(userRecord) {
    console.log(chalk.bold(chalk.green('👍 Successfully deleted user: ', JSON.stringify(userRecord))))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 Error deleting user: ' + error)))
    return false
  });
}

exports.find = async (uid) => {
  return admin
  .auth()
  .getUser(uid)
  .then(function(userRecord) {
    console.log(chalk.bold(chalk.green('👍 User founded: ', JSON.stringify(userRecord))))
    return userRecord
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 Error fetching user data' + error)))
    return false
  })
}

exports.update = async (uid, payload) => {
  return admin
  .auth()
  .updateUser(uid, {
    disabled: payload.disabled,
    emailVerified: payload.emailVerified,
    email: payload.email,
    password: payload.password,
  })
  .then(function(userRecord) {
    console.log(chalk.bold(chalk.magenta('👌 User updated: ', JSON.stringify(userRecord))))
    return userRecord.toJSON()
  })
  .catch(function(error) {
    console.log(chalk.bold(chalk.red('👿 Error updating user data' + error)))
    return false
  })
}

exports.get = async (payload) => {
  return _.forEach(payload.users, (user) => {
      admin
      .auth()
      .getUser(user)
      .then(function(userRecord) {
        console.log('Successfully fetched user data:', userRecord.toJSON());
        return userRecord.toJSON()
      })
      .catch(function(error) {
        console.log(chalk.bold(chalk.red('👌 User not found: ', user, error)))
        return false
      });
  })
}
