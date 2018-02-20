const bookshelf = require('../');

const Product = bookshelf.Model.extend({
  tableName: 'product',
  order: function() {
    return this.hasMany('OrderProduct');
  },
  category: function() {
    return this.hasMany('ProductCategory');
  }
});

module.exports = bookshelf.model('Product', Product);