/*
 * User routes
 */

'use strict'

const documentController = require('../controllers/document.js')

module.exports = [
  {
    method: 'document',
    path: '/document/create',
    handler: async (req) => {
      const newDocument = await documentController.createDocument(req.payload)
      return newDocument
    },
  },
  {
    method: 'PUT',
    path: '/document/update',
    handler: async (req) => {
      const updatedDocument = await documentController.updateDocument(req.payload)
      return updatedDocument
    },
  },
  {
    method: 'document',
    path: '/document/delete',
    handler: async (req) => {
      const deletedDocument = await documentController.deleteDocument(req.payload)
      return deletedDocument
    },
  },
  {
    method: 'document',
    path: '/document/removefield',
    handler: async (req) => {
      const updatedDocument = await documentController.removeField(req.payload)
      return updatedDocument
    },
  },
]
