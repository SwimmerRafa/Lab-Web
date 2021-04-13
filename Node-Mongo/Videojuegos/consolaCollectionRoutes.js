'use strict';

module.exports = function(app) {
    var consoleCollection = require('./consolaCollectionController');
    app.route('/consolas')
        .get(consoleCollection.obtener_todas_consolas)
        .post(consoleCollection.agregar_consola)
    
    app.route('/juegos')
        .post(consoleCollection.agregar_juego)
    
    app.route('/consola/:id')
        .get(consoleCollection.obtener_consola);

    app.route('/consolas/:nombre')
        .get(consoleCollection.obtener_consolas);

    app.route('/juegos-consola/:id_nombre')
        .get(consoleCollection.obtener_juegos_consola);

    app.route('/juegos/:nombre')
        .get(consoleCollection.obtener_juegos);
    
    app.route('/juegosID/:id')
        .get(consoleCollection.obtener_juegos_B);    
        
    app.route('/juego/:idc/:idj')
        .get(consoleCollection.obtener_juego);

    app.route('/blogs')
        .get(consoleCollection.obtener_blogs)
        .post(consoleCollection.agregar_blog);
};
