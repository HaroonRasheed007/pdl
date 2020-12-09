const router = require('express').Router();

let Order = require('../models/order.model');

router.route('/').get((req, res) => {
    Order.find()
    .then (orders => res.json(orders))
    .catch (err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const newOrder = new Order(req.body);
    newOrder.save()
    .then (() => res.json('Order created!'))
    .catch (err => res.status(400).json('Error: ' + err));
});

router.route('/editorder/:id').post((req, res) => {
    Order.findOneAndUpdate( {orderId:req.params.id}, {orderStatus: req.body.orderStatus})
    .then (() => res.json('Order Updated!'))
    .catch (err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Order.findOneAndDelete({orderType:req.params.id})
    .then(() => res.json('Order deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;