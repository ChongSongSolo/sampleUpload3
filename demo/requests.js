const { error } = require('console');
const http = require('http')
const data = JSON.stringify({
    title : 'MEAN Stack'
})

const options = {
    hostname: 'localhost',  
    port: 3000,
    path: '/',
    method: 'GET',
    headers:{
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
}

const request = http.request(options, response => {
    response.on('data', chunk => {
        process.stdout.write(chunk);
    })
})

request.on('error', error => {
    console.log(error);
})

request.end();