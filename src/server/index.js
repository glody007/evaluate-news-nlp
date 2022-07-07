var path = require('path')
const express = require('express')
const https = require('https');
const { response } = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express()

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

// Here we are configuring express to use body-parser as middle-ware.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})

app.get('/test', function (req, res) {
    const text = 'Main dishes were quite good, but desserts were too sweet for me.' 

    const options = {
        hostname: 'api.meaningcloud.com',
        path: encodeURI(`/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}`),
        method: 'POST',
        headers: {
           
        },
    };

    const request = https.request(options, response => {
        const chunks = []
    
        response.on('data', chunk => {
            chunks.push(chunk);
        });
    
        response.on("end", function (chunk) {
            const body = Buffer.concat(chunks);
            res.send(JSON.parse(body.toString()))
        });
    });
    
    request.on('error', error => {
        console.error(error);
    });
      
    request.end();
})
