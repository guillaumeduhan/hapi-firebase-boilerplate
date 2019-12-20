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
      const newUser = await userController.createUser(req.payload)
      return newUser
    },
  },
  {
    method: 'PUT',
    path: '/user/update',
    handler: async (req) => {
      console.log(req.payload)
      const user = await userController.updateUser(req.payload.uid, req.payload)
      return user
    },
  },
  {
    method: 'POST',
    path: '/user/get',
    handler: async (req) => {
      const user = await userController.getUser(req.payload.uid)
      return user
    },
  },
]
