exports.up = function(knex, Promise) {
  return Promise.all([  
    knex.raw('DROP TABLE categories CASCADE'),
    knex.raw('DROP TABLE product_category CASCADE'),
    knex.raw('DROP TABLE products CASCADE'),
    knex.raw('DROP TABLE order_product CASCADE'),
    knex.raw('DROP TABLE orders CASCADE'),
    knex.raw('DROP TABLE customers CASCADE')
  ]);  
};

exports.down = function(knex, Promise) {
  
};
