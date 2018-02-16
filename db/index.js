const knex = require('knex')({
  client: 'postgresql',   
  connection: {
    host: 'localhost',
    user: '',
    password : '',
    database : 'shipt',
  }
});

const db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;
