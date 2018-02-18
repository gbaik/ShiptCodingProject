exports.seed = function(knex, Promise) {
  return knex('category').del()
    .then(function () {
      return knex('category').insert([
        {name: 'seafood'},
        {name: 'sweets'},
        {name: 'flowers'}
      ]);
    });
};
