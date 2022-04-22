const express = require('express');
const path = require('path');


const geocode = require('./utils/test_geocode')
const forecast = require('./utils/test_weather')

const homepage = path.join(__dirname, '../public') 




const app = express();


app.use(express.static(homepage))


app.get('/', (req,res)=>{
    res.render();
})

app.get('/test_geocode' , (req,res)=>{
    const city = req.query.city;
    geocode(city, (err, {enlem, boylam}) => {
        res.send("Enlem : " + enlem + "Boylam " + boylam)
        if(err){
            return res.send(err)
        }
})

})

app.get('/test_forecast', (req, res) => {
    const city = req.query.city;
    geocode(city, (err, {enlem, boylam}) => {
        if(err){
            return res.send(err)
        }
        forecast(enlem, boylam, (err, data) => {
            if(err) {
                return res.send(err);
            }
            const showData = {
                
                sicaklik : data.temperature,
                nem : data.humidity,
            }
            res.send(showData)
        })
    })
})

 app.get('', (req,res)=>{
     jsonTest(
         res.send(data)
     )
 })




const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("sunucu ayağa kaldırıldı");
})