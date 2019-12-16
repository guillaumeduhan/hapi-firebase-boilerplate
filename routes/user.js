/*
 * User routes
 */

'use strict'

const userController = require('../controllers/user.js')

module.exports = [
  {
    method: 'POST',
    path: '/user/signup',
    handler: async (req) => {
      const newUser = await userController.createUser(req.query.email, req.query.password)
      return newUser
    },
  },
]
