import express from 'express';
import {
  getAllProducts, getProduct, addProduct, deleteProduct, updateProduct, filterProduct,
} from '../controllers';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/filter', filterProduct);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
// Note: the order of the routes matters
export default router;
