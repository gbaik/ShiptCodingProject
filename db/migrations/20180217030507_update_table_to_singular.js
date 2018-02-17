exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('customer', (table) => {
      table.increments('id').unsigned().primary();
      table.string('first_name', 100).nullable();
      table.string('number', 100).notNullable().unique();;      
    }),
    knex.schema.createTableIfNotExists('product', (table) => {
      table.increments('id').unsigned().primary();
      table.string('name').notNullable();      
      table.string('quantity').notNullable();
    }),
    knex.schema.createTableIfNotExists('category', (table) => {
      table.increments('id').unsigned().primary();
      table.string('name', 100).notNullable().unique();
    }),
    knex.schema.createTableIfNotExists('order', (table) => {
      table.increments('id').unsigned().primary();
      table.foreign('customer_id').references('customer');
      table.foreign('status_id').references('status');
      table.timestamp('ordered_at').defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('customers'),
    knex.schema.dropTable('products'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('orders')
  ]);
};
