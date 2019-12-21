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

exports.updatePost = async (payload) => {
  return posts
    .doc(payload.id)
    .update(payload)
    .then((post) => {
      console.log(chalk.bold(chalk.blue('👍 Post updated: ', payload.id)))
      return post
    })
    .catch((err) => {
      console.log(chalk.bold(chalk.red('👿 Error on updating post: ' + err)))
      return err
    })
}

exports.deletePost = async (payload) => {
  return posts
    .doc(payload.id)
    .delete()
    .then((post) => {
      console.log(chalk.bold(chalk.green('👍 Post deleted: ', payload.id)))
      return post
    })
    .catch((err) => {
      console.log(chalk.bold(chalk.red('👿 Error on deleting post: ' + err)))
      return err
    })
}
