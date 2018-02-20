exports.seed = function(knex, Promise) {
  return knex('order').del()
    .then(function () {
      return knex('order').insert([
        {customer_id: '11', status_id: '7', number:'H1jCZBIDG'},
        {customer_id: '13', status_id: '8', number: 'BJxsR-HLvz'},
        {customer_id: '14', status_id: '9', number: 'S1xlzfBLDz'}
      ]);
    });
};
