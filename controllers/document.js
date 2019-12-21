/*
 * Document controller
 */

'use strict'

const admin = require('firebase-admin')
const chalk = require('chalk')
const store = admin.firestore()
const documents = store.collection('documents')

exports.createDocument = async (payload) => {
  return documents
    .add(payload)
    .then((doc) => {
      console.log(chalk.bold(chalk.green('👍 New document added: ', doc.id)))
      return doc
    })
    .catch((err) => {
      console.log(chalk.bold(chalk.red('👿 Error on document: ' + err)))
      return err
    })
}

exports.updateDocument = async (payload) => {
  return documents
    .doc(payload.id)
    .update(payload)
    .then((doc) => {
      console.log(chalk.bold(chalk.blue('👍 document updated: ', payload.id)))
      return doc
    })
    .catch((err) => {
      console.log(chalk.bold(chalk.red('👿 Error on updating document: ' + err)))
      return err
    })
}

exports.deleteDocument = async (payload) => {
  return documents
    .doc(payload.id)
    .delete()
    .then((doc) => {
      console.log(chalk.bold(chalk.green('👍 document deleted: ', payload.id)))
      return doc
    })
    .catch((err) => {
      console.log(chalk.bold(chalk.red('👿 Error on deleting document: ' + err)))
      return err
    })
}

exports.removeField = async (payload) => {
  return documents
    .doc(payload.id)
    .update()
    .then((doc) => {
      console.log(chalk.bold(chalk.green('👍 Field removed on document: ', payload.id)))
      return doc
    })
    .catch((err) => {
      console.log(chalk.bold(chalk.red('👿 Error on removing field document: ' + err)))
      return err
    })
}
