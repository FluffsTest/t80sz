const express = require('express');
const https = require('https');
const fs = require('fs');
const helmet = require("helmet");
const compress = require('compression');
const ws = express();
const domain = {
	ip: '127.0.0.1', 
	port: 443
};
const opts = {
	key: fs.readFileSync('./certs/test.the80s.zone.key'),
	cert: fs.readFileSync('./certs/test.the80s.zone.cert'),
	requestCert: 'false',
	requestUnauthorized: 'false'
}
ws.use(helmet());
ws.use(compress({ level: 9 }));
ws.get('/', function(req, res) {
	res.redirect('/home')
});
ws.get('/*', express.static('public'));
ws.use('/home', express.static('public/home/'));
const hps = https.createServer(opts, ws);
hps.listen(domain.port, domain.ip, () => {console.log(`sup, server is up at ${domain.ip}:${domain.port}`)} );
