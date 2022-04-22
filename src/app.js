const express = require('express');
const path = require('path');



const app = express();

app.get('/', (req,res)=>{
    res.send('public/index.html');
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("sunucu ayağa kaldırıldı");
})