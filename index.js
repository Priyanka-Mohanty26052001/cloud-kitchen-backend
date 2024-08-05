// const express = require('express');
// const connection =require("./connection ");
// const listRoute =require('../routes/list');
// const app = express();

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use('/list',listRoute);


// module.exports = app;

const express=require('express');

const connection =require("./connection");
const listRoute=require("./routes/list");

const jwt=require("./routes/jwt");


 const checkAuth=require('./middleware/check-auth');
const cors = require('cors')
const app =express();
app.use(cors())
app.use(express.urlencoded({extends: true}));
app.use(express.json());
app.use('/list', listRoute);
app.use('/auth', jwt)



module.exports=app;