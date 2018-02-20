const express = require('express');
const path = require('path');
const model = require('../db/models');
const bookshelf = require('../db');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
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

app.get('/sold', function (req, res) {
  let start = req.query.start;
  let end = req.query.end;
  let year = Number(req.query.year) * 365;
  let month = Number(req.query.month) * 31;
  let soldPerDivider = year || month || req.query.day || 1;
  let exportToCSV = req.query.export === 'true' || false;
  let CSVFileName = req.query.fileName || 'untitled';
  let CSVPath = path.resolve(CSVFileName);
  let output = {};
  let productIdArray = [];

  console.log(CSVPath);

  const getProductName = async (orders) => {
    for (let [key, value] of Object.entries(orders)) {
      let products = value.product;
      
      for (var i = 0; i < products.length; i++) {
        let product = products[i];
        let productId = product.product_id;
        let amount = Number(product.amount) / soldPerDivider;

        productIdArray.push(productId);

        await model.Product.where({id: productId}).fetchAll() 
          .then(data => {            
            let productName = data.toJSON()[0].name;
      
            output[productName] = output[productName] || 0;
            output[productName] += amount;
          })
      }
    }

    return output;
  };

  model.Order.query(qb => {
    qb.where('ordered_at', '>=', start)
    qb.andWhere('ordered_at', '<=', end)
  })
    .fetchAll({withRelated: ['product']})
      .then(data => {
        let orders = data.toJSON();

        getProductName(orders)
          .then(data => {
            if (exportToCSV) {
                bookshelf.knex.raw(`COPY (SELECT * FROM product WHERE id IN (${[...productIdArray]})) TO '${CSVPath}.csv' with csv delimiter ','`)
                  .then(() => {
                    res.end()
                  })  
            } 
            
            res.send(data);
          })
          .catch(err => {
            res.status(500).send(err);
          });
      })
});

app.get('/order', function (req, res) {
  let customerFirstName = req.query.firstName;

  model.Customer.where({first_name: customerFirstName}).fetch()
    .then(data => {
      let customer = data.toJSON();
      let customerId = customer.id;

      model.Order.where({customer_id: customerId}).fetchAll()
        .then(data => {
          res.end(data.toJSON());
        })
    })
})

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
}); 

