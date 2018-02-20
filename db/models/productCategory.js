const bookshelf = require('../');

const ProductCategory = bookshelf.Model.extend({
  tableName: 'product_category',
  product: function() {
    return this.belongsTo('Product');
  },
  category: function() {
    return this.belongsTo('Category');
  }
});

module.exports = bookshelf.model('ProductCategory', ProductCategory);