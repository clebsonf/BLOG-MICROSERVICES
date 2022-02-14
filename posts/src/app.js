const express = require('express');

const app = express();
const routes = require('./routes')

app.use("/public/images",express.static(__dirname+"/public/images"));

app.disable('x-powered-by');
app.use(express.urlencoded({extended:false, limit:1.5*1024}));
app.use(express.json());

app.use(routes);

module.exports = app;