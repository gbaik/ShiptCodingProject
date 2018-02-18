exports.up = function(knex, Promise) {
  return Promise.all([    
    knex.schema.table('order', (table) => {
      table.integer('customer_id');
      table.foreign('customer_id').references('id').inTable('customer');
      table.integer('status_id');
      table.foreign('status_id').references('id').inTable('status');
    }),
    knex.schema.table('order_product', (table) => {
      table.integer('order_id');
      table.foreign('order_id').references('id').inTable('order');
      table.integer('product_id');
      table.foreign('product_id').references('id').inTable('product');
    }),
    knex.schema.table('product_category', (table) => {
      table.integer('product_id');
      table.foreign('product_id').references('id').inTable('product');
      table.integer('category_id');
      table.foreign('category_id').references('id').inTable('category');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([      
    knex.schema.table('order', (table) => {
      table.dropColumn('customer_id');
      table.dropColumn('status_id');            
    }),
    knex.schema.table('order_product', (table) => {
      table.dropColumn('order_id');
      table.dropColumn('product_id');
    }),
    knex.schema.table('product_category', (table) => {
      table.dropColumn('product_id');        
      table.dropColumn('category_id');   
    })
  ])  
};

