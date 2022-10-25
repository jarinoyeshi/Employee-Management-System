

var fs =require('fs');
var http= require('http');
const express =require('express');
const dotenv= require('dotenv');
const morgan= require('morgan');
const bodyparser=require('body-parser');
const path=require('path');

const connectDB = require('./server/connection/connection');


const app = express();


//adding path of config.env file. env file allows to share only source code not information
dotenv.config({path:'config.env'});
const PORT= process.env.PORT||8080;

//morgan module: log request -> to make a request
app.use(morgan('tiny'));


connectDB();

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"));
//load assets
app.use(express.static(__dirname+'/asstes'));
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/js', express.static(path.resolve(__dirname, "assets/image")));

// path of other ejs fies
app.use('/',require('./server/routes/routes'))





/*
app.use(express.static('assets'));
app.get('',(req,res)=>{

    res.sendFile(__dirname+'/views/index.html');
});

*/
app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`));

