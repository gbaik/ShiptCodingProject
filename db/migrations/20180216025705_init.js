exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('customers', (table) => {
      table.increments('id').unsigned().primary();
      table.string('first_name', 100).nullable();
      table.string('number', 100).notNullable().unique();;      
    }),
    knex.schema.createTableIfNotExists('status', (table) => {
      table.increments('id').unsigned().primary();
      table.string('type', 50).notNullable();
    }),
    knex.schema.createTableIfNotExists('products', (table) => {
      table.increments('id').unsigned().primary();
      table.string('name').notNullable();      
      table.string('quantity').notNullable();
    }),
    knex.schema.createTableIfNotExists('categories', (table) => {
      table.increments('id').unsigned().primary();
      table.string('name', 100).notNullable().unique();
    }),
    knex.schema.createTableIfNotExists('orders', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('customer_id').references('customers.id');
      table.integer('status_id').references('status.id');
      table.string('date_time').notNullable();
    }),
    knex.schema.createTableIfNotExists('order_product', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('order_id').references('orders.id');
      table.integer('product_id').references('products.id');
      table.string('amount').notNullable();
    }),
    knex.schema.createTableIfNotExists('product_category', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('product_id').references('products.id');
      table.integer('category_id').references('categories.id');      
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('customers'),
    knex.schema.dropTable('status'),
    knex.schema.dropTable('products'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('orders'),
    knex.schema.dropTable('order_product'),
    knex.schema.dropTable('product_category')
  ]);
};
