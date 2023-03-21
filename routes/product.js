const productController = require('../controllers/productController')
const router = require('express').Router()

router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/product/:id', productController.getOneProduct)

router.get('/product/published/:id', productController.getPublishedProduct)

router.put('/updateProduct/:id', productController.updateProduct)

router.delete('/delteProduct/:id', productController.deleteProduct)



module.exports= router