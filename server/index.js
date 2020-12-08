const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Root:finch@cluster0.ke4n6.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected!')
});


const usersRouters = require('./routes/users.js');
app.use('/users', usersRouters);

const ordersRouters = require('./routes/orders.js');
app.use('/orders', ordersRouters);



app.listen(port, () => {
    console.log('Server is running on ' + port);
})

