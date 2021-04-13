var express = require('express'),
    app = express(),
    port = process.env.PORT || 8585,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Por configuracion default de seguridad, NodeJS no permite invocaciones
//de aplicaciones externas. Tenemos que permitirlo ya que invocaremos los
//servicios REST desde Angular que estará corriendo en el puerto 4200.
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();

});

var routes = require('./studentCollectionRoutes');
routes(app);

app.listen(port);

console.log('Servidor escuchando en puerto: ' + port);
