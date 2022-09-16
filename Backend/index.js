const { Router } = require('express')
const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser');


const router=require("./src/router/router")
const app=express()

app.use(express.json());

app.use('/',router)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://firstDB:zwPu7dwJG0RCXU9f@cluster0.kgij2.mongodb.net/YOUR_NAME?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    
   
}
);

app.use('/',router)


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})
