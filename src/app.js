const express = require('express');
const path = require('path');
const geocode = require('./utils/test_geocode')

const homepage = path.join(__dirname, '../public') 




const app = express();


app.use(express.static(homepage))


app.get('/', (req,res)=>{
    res.render();
})

app.get('/geocode' , (req,res)=>{
    const city = req.query.city;
    geocode(city, (err, {enlem, boylam, konum}) => {
        res.send("Enlem : " + enlem + "Boylam " + boylam)
        if(err){
            return res.send(err)
        }
})

})

app.get('/forecast', (req,res)=>{
    
})




const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("sunucu ayağa kaldırıldı");
})