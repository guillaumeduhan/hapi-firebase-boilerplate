/*
 * User routes
 */

'use strict'

const documentController = require('../controllers/document.js')

module.exports = [
  {
    method: 'POST',
    path: '/document/create',
    handler: async (req) => {
      const newDocument = await documentController.create(req.payload)
      return newDocument
    },
  },
  {
    method: 'PUT',
    path: '/document/update',
    handler: async (req) => {
      const updatedDocument = await documentController.update(req.payload)
      return updatedDocument
    },
  },
  {
    method: 'POST',
    path: '/document/delete',
    handler: async (req) => {
      const deletedDocument = await documentController.delete(req.payload)
      return deletedDocument
    },
  },
]
