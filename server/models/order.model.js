const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema ({

    orderId: {
        type: Number
    },
    
    orderType: {
        type: String,

    },

    patientFirstname: {
        type: String,

    },

    patientLastname: {
        type: String,
    },

    orderStatus: {
        type: String
    }

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;