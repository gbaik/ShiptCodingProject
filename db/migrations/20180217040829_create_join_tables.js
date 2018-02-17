exports.up = function(knex, Promise) {
  return Promise.all([    
    knex.schema.createTable('order_product', (table) => {
      table.increments('id').unsigned().primary();      
      table.foreign('order_id').references('order');
      table.foreign('product_id').references('product');
      table.string('amount').notNullable();      
    }),
    knex.schema.createTable('product_category', (table) => {
      table.increments('id').unsigned().primary();      
      table.foreign('product_id').references('product');
      table.foreign('category_id').references('category');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([      
    knex.raw('DROP TABLE order_product CASCADE'),
    knex.raw('DROP TABLE product_category CASCADE'),
  ])  
};
