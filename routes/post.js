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
]
