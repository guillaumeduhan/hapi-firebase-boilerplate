/**
 * Resources
 */

'use strict'

const firebase = require('firebase')
// const chalk = require('chalk')

exports.initFirebase = () => {
  /*
     * Init your firebase app
     */
  const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DB_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  // console.log(chalk.bold(chalk.green('✅ Firebase')))
}
