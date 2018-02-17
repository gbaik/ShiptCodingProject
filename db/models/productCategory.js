const db = require('../');

const ProductCategory = db.Model.extend({
  tableName: 'product_category',
  product: function() {
    return this.belongsTo(Product);
  },
  category: function() {
    return this.belongsTo(Category);
  }
});

module.exports = db.model('ProductCategory', ProductCategory);