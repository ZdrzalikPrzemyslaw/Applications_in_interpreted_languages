const express = require('express');
const router = express.Router();

const indexController = require('../controllers/IndexController');
const categoriesController = require('../controllers/CategoriesController');
const productsController = require('../controllers/ProductsController');
const ordersController = require('../controllers/OrdersController');

router.get('/', indexController.home);

//Products
router.get('/products', productsController.findAll);
router.get('/products/:id', productsController.findById);
router.post('/products', productsController.create);
//TODO: to nie dziala chyba
router.put('/products/:id', productsController.update);

//Categories
router.get('/categories', categoriesController.findAll);

//Orders
router.get('/orders', ordersController.findAll);
router.get('/orders/:id', ordersController.findById);
router.get('/orders/:name', ordersController.findByName);
router.put('/orders/:id/:status', ordersController.update);
router.post('/orders', ordersController.create);
router.get('/orders/:status', ordersController.findByStatus);



module.exports = router