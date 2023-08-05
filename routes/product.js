const { Router } = require('express');
const {
    getProducts,
    getProduct,
    newProduct,
    deleteProduct,
     } = require('../controller/product');
const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', newProduct);
router.delete('/:id', deleteProduct);


module.exports = router;