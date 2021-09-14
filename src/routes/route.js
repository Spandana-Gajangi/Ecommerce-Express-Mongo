const { Router } = require('express');
const { orderService } = require('../services/orderService');
const router = Router()

router.get('/orders/list', orderService.getAllOrdersByDate);
router.post('/orders/create', orderService.create);
router.get('/orders/search', orderService.getAllOrdersByOrderId);
router.post('/orders/delete', orderService.delete);
router.post('/orders/update', orderService.update);

module.exports.router = router;