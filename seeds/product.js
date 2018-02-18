exports.seed = function(knex, Promise) {
  return knex('product').del()
    .then(function () {
      return knex('product').insert([
        {name: 'rose', quantity: '50'},
        {name: 'tulip', quantity: '100'},
        {name: 'daisy', quantity: '25'},
        {name: 'salmon', quantity: '260'},
        {name: 'tuna', quantity: '300'},
        {name: 'shrimp', quantity: '125'},
        {name: 'chocolate', quantity: '75'},
        {name: 'lollipop', quantity: '100'}
      ]);
    });
};
