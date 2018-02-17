exports.seed = function(knex, Promise) {
  return knex('status').del()
    .then(function () {
      return knex('status').insert([
        {type: 'delivery'},
        {type: 'on its way'},
        {type: 'or delivered'}
      ]);
    });
};
