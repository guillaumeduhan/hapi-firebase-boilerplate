'use strict'

const routes = [].concat(
  require('../routes/404'),
  require('../routes/document'),
  require('../routes/user')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    },
  },
}
