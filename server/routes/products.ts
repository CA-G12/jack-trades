import express from 'express';
import {
  getAllProducts,
  getProduct, addProduct, deleteProduct, updateProduct, filterProduct, getCategories,
} from '../controllers';
import { authentication } from '../middlewares';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/filter', filterProduct);
router.get('/categories', getCategories);
router.get('/:productId', getProduct);
router.post('/', addProduct);
router.put('/:productId', authentication, updateProduct);
router.delete('/:productId', authentication, deleteProduct);
// Note: the order of the routes matters
export default router;
