require('dotenv').config()
const path = require('path');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi')
const app = express();


console.log(process.env.AYLIEN_APP_KEY)


var textapi = new AYLIENTextAPI({
    application_id:process.env.AYLIEN_APP_ID,
    application_key:process.env.AYLIEN_APP_KEY
})


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/data', (req,res)=>{
    const {url} =req.url;
    textapi.sentiment({url}, function(error, response) {
        if (error === null) {
          console.log(response);
        }
      });
      res.json(response);
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
