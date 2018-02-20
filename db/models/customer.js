const bookshelf = require('../');

const Customer = bookshelf.Model.extend({
  tableName: 'customer',
  order: function() {
    return this.hasMany('Order');
  }
});

module.exports = bookshelf.model('Customer', Customer);