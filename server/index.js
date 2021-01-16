import express from 'express';
import https from 'https';
import fs from 'fs';
const ws = express();
const domain = {
	ip: '127.0.0.1', 
	port: 443,
};
const opts = {
	key: fs.readFileSync('./certs/test.the80s.zone.key'),
	cert: fs.readFileSync('./certs/test.the80s.zone.cert'),
	requestCert: 'false',
	requestUnauthorized: 'false'
}
const hps = https.createServer(opts, ws); 
ws.use(express.static('public'));
hps.listen(domain.port, domain.ip, () => {console.log(`sup, server is up at ${domain.ip}:${domain.port}`)} );