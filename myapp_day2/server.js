var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
    response.srtHeader('Access-Control-Allow-Origin', '*')

            var parseUrl = url.parse(request.url, true);
            var filePath = '.' + parseUrl.pathname;
            console.log(filePath);
            

            
            response.writeHead(200,{'Content-Type': 'text/plain'});
            response.write("this is it!");
            response.end("This is the end result!");
        });

        server.listen(8080, function(){ console.log('server is listening');
    });
