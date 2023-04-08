const express = require('express');
const productsRouter = require('./products.router');
const categoriesRouter=require('./categories.router.js');
const usersRouter=require('./users.router');
const customerRouter = require('./customer.router');
const ordersRouter = require('./orders.router');


function routerApi(app){
  const router= express.Router();

  app.use('/api/v1', router);

    router.use('/products',productsRouter);

    router.use('/categories',categoriesRouter);

    router.use('/users',usersRouter);

    router.use('/customer', customerRouter);

    router.use('/orders', ordersRouter)

  };

module.exports = routerApi;
