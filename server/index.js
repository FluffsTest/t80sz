const express = require('express');
const https = require('https');
const fs = require('fs');
const zlib = require('zlib');
const helmet = require("helmet");
const compress = require('compression');
const ws = express();
const domain = {
	ip: '127.0.0.1', 
	port: 8003
};
ws.use(helmet());
ws.use(compress({ 
  	params: {
    	[zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_FONT,
    	[zlib.constants.BROTLI_PARAM_QUALITY]: 9
	}
})
);
ws.use('/', express.static('public/home'));
ws.use('/src', express.static('public/src'));
ws.listen(domain.port, domain.ip, () => {console.log(`sup, server is up at ${domain.ip}:${domain.port}`)} );
