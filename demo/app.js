const http = require('http');
const server = http.createServer((request, response) =>{

    response.writeHead(200, {'Content-type':'text/html'});
    
    if(request.url === '/get') {
        response.write('GET page ok');
        if (request.method === 'GET'){
        response.end('GET');
    }
    }else if(request.url === '/post'){
        response.write('POST page ok');
        if (request.method === 'POST'){
            response.end('POST');
       }
        
    }else if(request.url === '/put'){
        response.write('PUT page ok');
        if (request.method === 'PUT'){
            response.end('PUT');
        }
    }else if(request.url === '/delete'){
        response.write('DELETE page ok');
        if (request.method === 'DELETE'){
            response.end('DELETE');
        }
    }else{
        response.end('homepage!');
    }
    response.end()
    
}).listen(3000, () => console.log("http://localhost:3000"));