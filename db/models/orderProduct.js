const db = require('../');

const OrderProduct = db.Model.extend({
  tableName: 'order_product',
  order: function() {
    return this.belongsTo(Order);
  },
  product: function() {
    return this.belongsTo(Product);
  }
});

module.exports = db.model('OrderProduct', OrderProduct);