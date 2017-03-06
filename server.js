var http = require('http');
var fs = require('fs');

//Port number where the server listens, add this to the URL like 'http://localhost:8080'
const port = 8080;

/*
 * Write response to the client
 */
const writeResponse = function(response, url) {
    //Tell the client that the request was 'OK'
    response.statusCode = 200;
    //Tell the client we're sending html text
    response.setHeader('Content-Type', 'text/html');

    //TASK-1: write here the response to the client, we need to send the html in
    //the file public/index.html to display our website.
};

/*
 * Request handler, will receive the request from client and write a response
 * back to it.
 */
const requestHandler = function(request, response) {
    console.log("Received request for URL: " + request.url);

    writeResponse(response);
};

//Create a server with the request handler function
var server = http.createServer(requestHandler);

//Tie the server to port defined in the variable 'port'
server.listen(port, function() {
    console.log("Server listening on address: http://localhost:" + port);
});
