require('http').createServer((req, res) => res.end('hello nishizawa')
).listen(process.env.PORT || 3000);
