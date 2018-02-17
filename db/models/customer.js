const db = require('../');

const Customer = db.Model.extend({
  tableName: 'customer',
  order: function() {
    return this.hasMany(Order);
  }
});

module.exports = db.model('Customer', Customer);