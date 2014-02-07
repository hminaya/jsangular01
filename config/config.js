var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'micro-carros'
    },
    port: 3000,
    db: 'mongodb://localhost/micro-carros-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'micro-carros'
    },
    port: 3000,
    db: 'mongodb://localhost/micro-carros-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'micro-carros'
    },
    port: 3000,
    db: 'mongodb://localhost/micro-carros-production'
  }
};

module.exports = config[env];
