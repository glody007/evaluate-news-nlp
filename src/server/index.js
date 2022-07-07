var path = require('path')
const express = require('express')
const https = require('https');
const { response } = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
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
