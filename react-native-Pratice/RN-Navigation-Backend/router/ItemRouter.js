const express = require('express');
const ItemController = require('../controller/ItemController')

const router = express.Router();

router.get('/all/item', ItemController.getAllItem);
router.post('/one/item',ItemController.postOneItem );
router.post('/remove/item', ItemController.deleteItem);

module.exports = router;