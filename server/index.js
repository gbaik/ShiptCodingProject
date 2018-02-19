const express = require('express');
const path = require('path');
const model = require('../db/models');

const app = express();
const port = process.env.PORT || 3000;

app.get('*', function (req, res) {

  model.Order.where({id: 1}).fetch({withRelated: ['customer', 'product']})
    .then(data => {
      let customer = data.related('customer').toJSON();
      let customerId = customer.id;
      let customerFirstName = customer.first_name;
      let orderNumber = customer.number;
      let product = data.related('product').toJSON()[0];
      let output = [customerId, customerFirstName];

      model.Product.where({id: product.product_id}).fetch({withRelated: ['category']})
      .then(data => {
          let category = data.related('category').toJSON()[0];
          let categoryId = category.category_id;

          output.push(categoryId);
      
          model.Category.where({id: categoryId}).fetch({withRelated: ['product']})
            .then(data => {
              let categoryName = data.toJSON().name;
              
              output.push(categoryName);
              output.push(orderNumber);
              
              res.send(output)
            })
            .catch(err => {
              res.status(500).send(err);
            });
        })


    })

});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
}); 

