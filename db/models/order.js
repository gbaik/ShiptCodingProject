const db = require('../');

const Order = db.Model.extend({
  tableName: 'order',
  hasTimestamps: true,
  customer: function() {
    return this.belongsTo('Customer');
  },
  status: function() {
    return this.belongsTo('Status');
  },
  product: function() {
    return this.hasMany('OrderProduct');
  }
});

module.exports = db.model('Order', Order);