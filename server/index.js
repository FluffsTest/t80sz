const exp = require('express')
const ws = exp();
let domain = ['127.0.0.1', 80];
ws.use(exp.static('public'));
ws.listen(domain[1], domain[0], () => {console.log(`sup, server is up at ${domain[0]}:${domain[1]}`)} );