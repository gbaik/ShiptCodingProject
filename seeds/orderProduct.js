exports.seed = function(knex, Promise) {
  return knex('order_product').del()
    .then(function () {
      return knex('order_product').insert([
        {order_id: '1', product_id: '10', amount: '10'},
        {order_id: '2', product_id: '12', amount: '50'},
        {order_id: '2', product_id: '13', amount: '25'},
        {order_id: '1', product_id: '15', amount: '5'},
        {order_id: '1', product_id: '16', amount: '10'},        
        {order_id: '3', product_id: '11', amount: '120'}
      ]);
    });
};
