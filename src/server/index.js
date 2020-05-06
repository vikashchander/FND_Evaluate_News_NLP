require('dotenv').config({path:'/config/config.env'})
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi')
const app = express();




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

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
