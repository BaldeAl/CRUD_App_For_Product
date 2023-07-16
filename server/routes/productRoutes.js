const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct); //je rajoute une route pour la création d'un produit
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
