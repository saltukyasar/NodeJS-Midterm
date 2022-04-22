const express = require('express');
const path = require('path');

const homepage = __dirname 'public/index.html'


const app = express();

app.get('/', (req,res)=>{
    res.send(homepage);
})

app.get('/geocode' , (req,res)=>{
    res.send()
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("sunucu ayağa kaldırıldı");
})