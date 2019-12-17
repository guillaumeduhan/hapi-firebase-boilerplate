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
  {
    method: 'PUT',
    path: '/user/update',
    handler: async (req) => {
      const user = await userController.updateUser(req.query.uid, req.query.email, req.query.password)
      return user
    },
  },
]
