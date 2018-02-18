exports.seed = function(knex, Promise) {
  return knex('product_category').del()
    .then(function () {
      return knex('product_category').insert([
        {product_id: 9, category_id: 9},
        {product_id: 10, category_id: 9},
        {product_id: 11, category_id: 9},
        {product_id: 12, category_id: 7},
        {product_id: 13, category_id: 7},
        {product_id: 14, category_id: 7},
        {product_id: 15, category_id: 8},
        {product_id: 16, category_id: 8}
      ]);
    });
};
