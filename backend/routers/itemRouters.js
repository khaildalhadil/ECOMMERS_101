import express from 'express';

import {
  getAllItems,
  addItem,
  removeItem,
  updateItem
} from '../controllers/itemsControllers.js';

const router = express.Router();

router
  .route('/items')
  .get(getAllItems)
  
  router
  .route('/items/:id')
  .patch(updateItem)
  .delete(removeItem)
  
router.route('/items/add').post(addItem);

export default router;