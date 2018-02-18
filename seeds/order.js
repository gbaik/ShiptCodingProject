exports.seed = function(knex, Promise) {
  return knex('order').del()
    .then(function () {
      return knex('order').insert([
        {customer_id: '11', status_id: '7'},
        {customer_id: '13', status_id: '8'},
        {customer_id: '14', status_id: '9'}
      ]);
    });
};
