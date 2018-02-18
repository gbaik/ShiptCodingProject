exports.seed = function(knex, Promise) {
  return knex('status').del()
    .then(function () {
      return knex('status').insert([
        {type: 'waiting for delivery'},
        {type: 'on its way'},
        {type: 'delivered'}
      ]);
    });
};
