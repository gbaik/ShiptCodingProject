const db = require('../');

const Category = db.Model.extend({
  tableName: 'category',
  product: function() {
    return this.hasMany(ProductCategory);
  }
});

module.exports = db.model('Category', Category);