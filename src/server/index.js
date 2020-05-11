require('dotenv').config()
const path = require('path');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var AYLIENTextAPI = require('aylien_textapi')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var textapi = new AYLIENTextAPI({
    application_id:process.env.AYLIEN_APP_ID,
    application_key:process.env.AYLIEN_APP_KEY
})


app.use(express.static('dist'))


app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    
})

app.post('/data', (req,res)=>{
   
    textapi.sentiment({ url: req.body.url}, function(error, response) {
        if(error === null){
           // console.log(response);
            res.send(response);
        }else{
           // console.log(error);
            res.send(error);
        }
      })})
     

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})

