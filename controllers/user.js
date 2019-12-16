/*
 * User controller
 */

'use strict'

const admin = require('firebase-admin')

exports.createUser = (email, password) => {
  admin.auth().createUser({
    email: email,
    password: password,
  })
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('👍 Successfully created new user:', userRecord.uid)
  })
  .catch(function(error) {
    console.log('👿 Error creating new user:', error)
  })
}
