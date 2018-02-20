exports.up = function(knex, Promise) {
  return Promise.all([    
    knex.schema.table('customer', (table) => {
      table.dropColumn('number');
    }),
    knex.schema.table('order', (table) => {
      table.string('number', 100).unique();   
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([    
    knex.schema.table('customer', (table) => {
      table.string('number', 100).unique();         
    }),
    knex.schema.table('order', (table) => {
      table.dropColumn('number');      
    })
  ])
};
