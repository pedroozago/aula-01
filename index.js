var express = require('express');

var server = express ();

server.get('/',(request, response) => {
    response.send('Hello World!')
});

server.listen(3333);