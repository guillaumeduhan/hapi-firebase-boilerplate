/*
 * Post controller
 */

'use strict'

const admin = require('firebase-admin')
const chalk = require('chalk')
const store = admin.firestore()
const posts = store.collection('posts')

exports.createPost = async (payload) => {
  return posts
    .add(payload)
    .then((post) => {
      console.log(chalk.bold(chalk.green('👍 New post added: ', post.id)))
      return post
    })
    .catch((err) => {
      console.log(chalk.bold(chalk.red('👿 Error on post: ' + err)))
      return err
    })
}
