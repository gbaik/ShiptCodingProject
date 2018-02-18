exports.seed = function(knex, Promise) {
  return knex('customer').del()
    .then(function () {
      return knex('customer').insert([
        {first_name: 'Cecelia', number:'H1jCZBIDG'},
        {first_name: 'Rosie', number: 'BJxsR-HLvz'},
        {first_name: 'Beth', number: 'HJxMzHIDM'},
        {first_name: 'Ben', number: 'S1xlzfBLDz'},
        {first_name: 'Marcus', number: 'S1WgMMSIwM'}        
      ]);
    });
};


