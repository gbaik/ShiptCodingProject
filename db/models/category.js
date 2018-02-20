const bookshelf = require('../');

const Category = bookshelf.Model.extend({
  tableName: 'category',
  product: function() {
    return this.hasMany('ProductCategory');
  }
});

module.exports = bookshelf.model('Category', Category);