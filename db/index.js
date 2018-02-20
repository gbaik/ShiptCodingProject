const knex = require('knex')({
  client: 'postgresql',   
  connection: {
    host: 'localhost',
    user: '',
    password : '',
    database : 'shipt',
  }
});

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
