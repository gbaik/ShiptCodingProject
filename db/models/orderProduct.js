const bookshelf = require('../');

const OrderProduct = bookshelf.Model.extend({
  tableName: 'order_product',
  order: function() {
    return this.belongsTo('Order');
  },
  product: function() {
    return this.belongsTo('Product');
  }
});

module.exports = bookshelf.model('OrderProduct', OrderProduct);