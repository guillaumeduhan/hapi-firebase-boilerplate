/*
 * Post routes
 */

'use strict'

const postsController = require('../controllers/post.js')

module.exports = [
  {
    method: 'POST',
    path: '/document/create',
    handler: async (req) => {
      const newPost = await postsController.create(req.payload)
      return newPost
    },
  },
  {
    method: 'PUT',
    path: '/document/update',
    handler: async (req) => {
      const updatedPost = await postsController.update(req.payload)
      return updatedPost
    },
  },
  {
    method: 'POST',
    path: '/document/delete',
    handler: async (req) => {
      const deletedPost = await postsController.delete(req.payload)
      return deletedPost
    },
  },
]
