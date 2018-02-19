const db = require('../');

const Product = db.Model.extend({
  tableName: 'product',
  order: function() {
    return this.hasMany('OrderProduct');
  },
  category: function() {
    return this.hasMany('ProductCategory');
  }
});

module.exports = db.model('Product', Product);