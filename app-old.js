const http = require('http');
http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'application/json'})
    let salida = {nombre: 'Dalmiro Zantleifer',estado:'Muy Cansado',megusta:['comer','hacercaca','etc'],url:req.url};
    res.write(JSON.stringify(salida))
    res.end();
}).listen(8080);

console.log('Escuchando puerto 8080');
