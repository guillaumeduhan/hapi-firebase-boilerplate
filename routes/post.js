/*
 * User routes
 */

'use strict'

const postController = require('../controllers/post.js')

module.exports = [
  {
    method: 'POST',
    path: '/post/create',
    handler: async (req) => {
      const newPost = await postController.createPost(req.payload)
      return newPost
    },
  },
  {
    method: 'PUT',
    path: '/post/update',
    handler: async (req) => {
      const newPost = await postController.updatePost(req.payload)
      return newPost
    },
  },
  {
    method: 'POST',
    path: '/post/delete',
    handler: async (req) => {
      const newPost = await postController.deletePost(req.payload)
      return newPost
    },
  },
]
