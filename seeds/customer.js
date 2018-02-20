exports.seed = function(knex, Promise) {
  return knex('customer').del()
    .then(function () {
      return knex('customer').insert([
        {first_name: 'Cecelia'},
        {first_name: 'Rosie'},
        {first_name: 'Beth'},
        {first_name: 'Ben'},
        {first_name: 'Marcus'}        
      ]);
    });
};


