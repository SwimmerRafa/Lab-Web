'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'videojuegos';

exports.obtener_todas_consolas = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        db.collection("consolas").find().toArray(function(err, result) {
            if (err){
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};

exports.agregar_consola = function(req, res){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var nueva_consola = req.body;
        nueva_consola.juegos = nueva_consola.juegos.map(item => item.idJ)
        db.collection("consolas").insertOne(nueva_consola, function(err, res){
            if(err){
                throw err;
            }
            console.log("Insert ejecutado...")
            mdbclient.close();
        });

        res.end();
    });
}

exports.agregar_juego = function(req, res){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var nuevo_juego = req.body;
        nuevo_juego.carousel = nuevo_juego.carousel.map(item => item.img)
        nuevo_juego.ligas = nuevo_juego.ligas.map(item => item.link)
        db.collection("juegos").insertOne(nuevo_juego, function(err, res){
            if(err){
                throw err;
            }
            console.log("Insert ejecutado...")
            mdbclient.close();
        });

        res.end();
    });
}

exports.agregar_blog = function(req, res){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var nueva_consola = req.body;

        db.collection("blog").insertOne(nueva_consola, function(err, res){
            if(err){
                throw err;
            }
            console.log("Insert ejecutado...")
            mdbclient.close();
        });

        res.end();
    });
}

exports.obtener_consola = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var id_consola = req.params.id
//Solamente obtenemos el nombre, imagen y ficha tecnica de la consola
        db.collection("consolas").find({_id:id_consola}).project({_id:1, nombre:1, imagen:1, fichatecnica:1}).toArray(function(err, result) {
            if (err){
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};
exports.obtener_consolas = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err,
                                                                                           mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var consolaNombre = req.params.nombre;
        db.collection("consolas").find({nombre:new
            RegExp(consolaNombre,'i')}).toArray(function(err, result){
            if (err){
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};

exports.obtener_juegos_B = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var id_juego = parseInt(req.params.id)
//Solamente obtenemos el nombre, imagen y ficha tecnica de la consola
        db.collection("juegos").find({_id:id_juego}).toArray(function(err, result) {
            if (err){
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};

exports.obtener_juegos_consola =  function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var idNombre = req.params.id_nombre;
        db.collection("consolas").findOne({_id:idNombre}, {projection:{_id:0, juegos:1}}, function(err, result) {
            if (err) {
                throw err;
            }
            db.collection("juegos").find({_id:{$in:result.juegos}}).project({_id:1, nombre:1, imagen:1}).toArray(function (err, resultJ) {
                if (err) {
                    throw err;
                }
                console.log("Resultados Obtenidos: " + resultJ.length);
                mdbclient.close();
                res.end(JSON.stringify(resultJ));
            });
        });
    });
};

exports.obtener_juegos = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err,
                                                                                           mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var consolaNombre = req.params.nombre;
        db.collection("juegos").find({nombre:new
            RegExp(consolaNombre,'i')}).toArray(function(err, result){
            if (err){
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};

exports.obtener_juego = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var id_consola = req.params.idc
        db.collection("consolas").find({_id:id_consola}).toArray(function(err, result) {
            if (err){
                throw err;
            }
            if(result.length >= 1){
                var id_juego = parseInt(req.params.idj)
                db.collection("juegos").find({_id:id_juego}).project({_id:0}).toArray(function(err, resultJ) {
                    if (err) {
                        throw err;
                    }
                    mdbclient.close();
                    res.end( JSON.stringify(resultJ));
                });
            }
            else{
                res.end();
            }
        });
    });
};

exports.obtener_blogs = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        db.collection("blog").find().toArray(function(err, result) {
            if (err){
                throw err;
            }
            console.log(result)
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};

