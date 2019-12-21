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
      const newUser = await userController.create(req.payload)
      return newUser
    },
  },
  {
    method: 'PUT',
    path: '/user/update',
    handler: async (req) => {
      const user = await userController.update(req.payload.uid, req.payload)
      return user
    },
  },
  {
    method: 'POST',
    path: '/user/find',
    handler: async (req) => {
      const user = await userController.find(req.payload.uid)
      return user
    },
  },
  {
    method: 'POST',
    path: '/user/delete',
    handler: async (req) => {
      const user = await userController.delete(req.payload.uid)
      return user
    },
  },
]
