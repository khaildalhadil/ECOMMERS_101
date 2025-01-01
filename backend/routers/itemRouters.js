import express from 'express';

import {
  getAllItems,
  addItem
} from '../controllers/itemsControllers.js';

const router = express.Router();

router
  .route('/items')
  .get(getAllItems)

router.route('/items/add').post(addItem);

export default router;