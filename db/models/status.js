const db = require('../');

const status = db.Model.extend({
  tableName: 'status',
  order: function() {
    return this.hasMany(Order);
  }
});

module.exports = db.model('status', status);