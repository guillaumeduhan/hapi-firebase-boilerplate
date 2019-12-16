/**
 * Resources
 */

'use strict'

const admin = require('firebase-admin')
const serviceAccount = require('../serviceAccountKey.json')

exports.firebase = () => {
  /*
     * Init your firebase app
     */
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://test-f9e7a.firebaseio.com',
  })
}
