const http = require('https');


exports.handler = (event, context, callback) => {
    const options = {
        method: 'GET',
        hostname: 'naver.com',
    };
 
    const req = http.request(options, (res) => {
        const chunks = [];
 
        res.on('data', (chunk) => chunks.push(chunk));
 
        res.on('end', () => {
            const body = Buffer.concat(chunks);
            const results = body.toString();
            
            console.log(results);
            
            callback(null, {
                statusCode: 200,
                body: results,
            });
        });
    });
 
    req.end();
};

