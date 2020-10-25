const express = require('express');
var app = express();
var hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');

//helpers
hbs.registerHelper('getAno', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();        
    });
    return palabras.join(' ');
})

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'dalmiro ojeda',
        ano: new Date().getFullYear()
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        ano: new Date().getFullYear()
    });
});

app.get('/data',(req,res)=>{
    //res.send('Hola Mundo!');
    let salida = {nombre: 'Dalmiro Zantleifer',url:req.url};
    res.send(salida);
});

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`);
    
});


