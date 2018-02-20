const bookshelf = require('../');

const status = bookshelf.Model.extend({
  tableName: 'status',
  order: function() {
    return this.hasMany('Order');
  }
});

module.exports = bookshelf.model('status', status);