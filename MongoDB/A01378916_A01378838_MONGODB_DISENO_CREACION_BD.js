//Creamos la base de datos

use videojuegos;
db.dropDatabase();
use videojuegos;
//Creamos la coleccion de consolas
db.createCollection("consolas");

//Creamos la coleccion de juegos
db.createCollection("juegos");

//Creamos la coleccion de Blog
db.createCollection("blog");

//-----------------------------Consolas
db.consolas.insert({
    "_id":"ps4", 
    "nombre":"Playstation 4", 
    "imagen": "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/711719524144.jpg", 
    "fichatecnica": "The PlayStation 4 uses an Accelerated Processing Unit (APU) developed by AMD in cooperation with Sony. It combines a central processing unit (CPU) and graphics processing unit (GPU), as well as other components such as a memory controller and video decoder. The CPU consists of two 28 nm quad-core Jaguar modules totaling 8 x86-64 cores, 7 of which are available for game developers to use. The GPU consists of 18 compute units to produce a theoretical peak performance of 1.84 TFLOPS.",
    "juegos":[0, 1, 2]
});
db.consolas.insert({
    "_id":"xbox", 
    "nombre":"Xbox One",
    "imagen": "https://resources.claroshop.com/medios-plazavip/s2/10665/1334590/5e582b40a8017-13024a3d-1a0b-4cf9-ac52-06ecf14be109-1600x1600.jpg", 
    "fichatecnica": "La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75Ghz, 8 GB de memoria RAM DDR3 más 32MB de ESRAM, con una velocidad de hasta 204GB/s​ 500 GB de disco duro y un lector Blu-ray 6x. Los gráficos integrados también corren por parte de AMD siendo 8 veces más potentes que los de Xbox 360 y compuestos por 5 000 000 000 transistores, diez veces más que Xbox 360. Incluye además conexiones USB 3.0, HDMI in-out y 802.11n Wireless. También el Kinect 2.0, con una cámara de 1080p que procesa 2 GB de datos por segundo con un tiempo de respuesta de 13 milmillonésimas de segundo.",
    "juegos":[3, 4, 5]
});
db.consolas.insert({
    "_id":"pc",
    "nombre":"PC Master",
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/71wi5JwKE-L._AC_SL1500_.jpg",
    "fichatecnica": "he PC Master Race, sometimes referred to by its original phrasing as the Glorious PC Gaming Master Race, is an internet subculture, internet community, and a tongue-in-cheek term of superiority for PC gaming used among gamers to compare PC gaming to console gaming.",
    "juegos":[6, 7, 8]
});
db.consolas.insert({
    "_id":"switch", 
    "nombre":"Nintendo Switch",
    "imagen": "https://resources.claroshop.com/medios-plazavip/mkt/5d8bcfa58a9da_2jpg.jpg",
    "fichatecnica": "Original Switch models were released with model number 'HAC-001'. The Switch uses a system-on-chip from the Tegra family of products, developed in partnership with Nvidia. No specific details were revealed beyond that it is a 'custom' Tegra chip 'based on the same architecture as the world's top-performing GeForce gaming graphics cards' that are common in personal computers, and has a custom API known as 'NVN', which is designed to bring lightweight, fast gaming to the masses",
    "juegos":[9, 10, 11]
});

//----------------------------Juegos PS4

db.juegos.insert({
    "_id":0, 
    "nombre":"The Last Of Us 2", 
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/71e5h9M2YQL._AC_SL1200_.jpg", 
    "developer":"Naughty Dog", 
    "lanzamiento": new Date("2020-06-19"), 
    "carousel":["https://images-na.ssl-images-amazon.com/images/I/71-QKjqb1ML._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81jYlohriSL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61MqkiugiDL._AC_SL1500_.jpg"], 
    "ligas":["https://www.playstation.com/es-es/games/the-last-of-us-part-ii-ps4/", "https://store.playstation.com/es-mx/product/UP9000-CUSA07820_00-THELASTOFUSPART2", "https://es.wikipedia.org/wiki/The_Last_of_Us_Part_II"]
});
db.juegos.insert({
    "_id":1,
    "nombre":"Spider-Man", 
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/814tECNqHBL._AC_SL1500_.jpg", 
    "developer":"Insomniac Games", 
    "lanzamiento": new Date("2018-09-07"), 
    "carousel":["https://criticasinspoilers.com/wp-content/uploads/2018/10/Portada_-800x445.png", "https://as01.epimg.net/meristation/imagenes/2019/08/28/noticias/1567005080_766698_1567005232_portada_normal.jpg", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/04/04/15228631339799.jpg"], 
    "ligas":["https://store.playstation.com/es-mx/product/UP9000-CUSA02299_00-MARVELSSMGOTY000", "https://www.playstation.com/es-mx/games/marvels-spider-man-ps4/", "https://es.wikipedia.org/wiki/Spider-Man_(videojuego_de_2018)"]
});
db.juegos.insert({
    "_id":2,
    "nombre":"Crash Bandicoot 4 - It's About Time",
    "imagen": "https://uvejuegos.com/img/caratulas/64715/boxart_6805.jpg",
    "developer":"Toys for Bob",
    "lanzamiento": new Date("2020-10-02"),
    "carousel":["https://i.ytimg.com/vi/aOGwx3Ju6QQ/maxresdefault.jpg", "https://media.vandal.net/i/1200x630/86915/crash-bandicoot-4-its-about-time-2020622170127_12.jpg", "https://as.com/meristation/imagenes/2020/06/30/noticias/1593494591_694033_1593494676_noticia_normal_recorte1.jpg"],
    "ligas":["https://www.crashbandicoot.com/mx/es/crash4/home", "https://store.playstation.com/es-mx/product/UP0002-CUSA19035_00-CB4STANDARD00001", "https://es.wikipedia.org/wiki/Crash_Bandicoot_4:_It%27s_About_Time"]
});

//----------------------------Juegos Xbox

db.juegos.insert({
    "_id":3, 
    "nombre":"Halo Infinite", 
    "imagen": "https://content.halocdn.com/media/Default/community/blogs/Infinite/halo_infinite_wallpaper-tablet_2048x2048-23e8a110e3a243bfb0156ce46a531664.png", 
    "developer":"343 Industries", 
    "lanzamiento": new Date("2020-12-01"), 
    "carousel":["https://i.pinimg.com/originals/8d/30/a3/8d30a32ce5aa7d3c5e42bea338f5dc8b.jpg", "https://freakelitex.com/wp-content/uploads/2018/06/Halo-Infinity.jpg", "https://s2.megabrandsmedia.com/2018/07/18/16/07/10/r/1000x750/xm5HlG1DXz1531944430.jpeg"], 
    "ligas":["https://www.xbox.com/es-MX/games/halo-infinite", "https://es.wikipedia.org/wiki/Halo_Infinite", "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjGhd2hhLLsAhUlnq0KHV48DVwQFjAMegQIExAC&url=https%3A%2F%2Fas.com%2Fmeristation%2Fjuegos%2Fhalo_infinite%2Fnoticias%2F&usg=AOvVaw1cuxB96i6HbeIO5o1E8t24"]
});
db.juegos.insert({
    "_id":4,
    "nombre":"Forza Motorsport 7", 
    "imagen": "https://static.wikia.nocookie.net/forzamotorsport/images/9/99/FM7_Boxart.jpg/revision/latest/scale-to-width-down/619?cb=20170719121744", 
    "developer":"Turn 10 Studios", 
    "lanzamiento": new Date("2017-11-07"), 
    "carousel":["https://i.blogs.es/3f3e91/forzamotorsport7_rreview_01_sandstorm_wm_3840x2160/450_1000.jpg", "https://planetadelmotor.com/wp-content/uploads/2017/07/forza_motorsport_7_e3_2017_04.jpg", "https://planetadelmotor.com/wp-content/uploads/2017/07/d8075192-c9d4-4fd2-95b8-32a24e7a8724.jpg"],
    "ligas":["https://www.xbox.com/es-MX/games/forza-7", "https://forza.fandom.com/wiki/Forza_Motorsport_7", "https://forzamotorsport.net/en-US"]
});
db.juegos.insert({
    "_id":5,
    "nombre":"Call of Duty Warzone",
    "imagen": "https://store-images.s-microsoft.com/image/apps.46452.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.611f3905-926e-456a-b549-6b68564b2769",
    "developer":"Infinity Ward Raven Software",
    "lanzamiento": new Date("2020-03-10"),
    "carousel":["https://store-images.s-microsoft.com/image/apps.5292.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.b5893ca4-bb2d-4329-9be4-41bb1829ee84?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg", "https://webediaespana.delivery.content-hub.app/image/53/8c/22/5e67780d3bef077e87/original/1366-2000.jpeg", "https://as.com/meristation/imagenes/2020/03/10/noticias/1583821135_954056_1583939675_noticia_normal.jpg"],
    "ligas":["https://www.microsoft.com/es-mx/p/call-of-duty-warzone/9mwwnmh6z0jh?activetab=pivot:overviewtab", "https://es.wikipedia.org/wiki/Call_of_Duty:_Warzone#:~:text=Warzone%20permite%20el%20combate%20multijugador,o%20como%20un%20juego%20aparte.&text=Warzone%20presenta%20dos%20modos%2C%20Bot%C3%ADn%20y%20Battle%20Royale", "https://www.callofduty.com/mx/es/warzone"]});

//-----------------------------Juegos PC

db.juegos.insert({
    "_id":6, 
    "nombre":"Star Wars Jedi Fallen Oder", 
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/61eG64vCRaL._AC_SL1000_.jpg", 
    "developer":"Respawn Entertainment", 
    "lanzamiento": new Date("2019-11-15"), 
    "carousel":["https://images-na.ssl-images-amazon.com/images/I/61pq0axFZRL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61mnqnFfwmL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61Q29f8tYBL._AC_SL1500_.jpg"], 
    "ligas":["https://www.ea.com/es-es/games/starwars/jedi-fallen-order", "https://www.vidaextra.com/analisis/analisis-star-wars-jedi-fallen-order-semilla-que-podria-llegar-a-ser-grandes-sagas-ea", "https://es.wikipedia.org/wiki/Star_Wars_Jedi:_Fallen_Order"]
});
db.juegos.insert({
    "_id":7,
    "nombre":"Valorant", 
    "imagen": "https://www.elotrolado.net/w/images/thumb/4/47/VALORANT_-_Cover.jpg/240px-VALORANT_-_Cover.jpg", 
    "developer":"Riot Games", 
    "lanzamiento": new Date("2020-06-02"), 
    "carousel":["https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/07/15862421610874.jpg", "https://revistayoung.es/wp-content/uploads/2020/06/valorant-portada-estreno.jpg", "https://imagenesgamers.canalrcn.com/ImgTodoGamers/valorant-lanzamiento-portada.jpg"], 
    "ligas":["https://es.wikipedia.org/wiki/Valorant", "https://playvalorant.com/es-mx/?gclid=Cj0KCQjwoJX8BRCZARIsAEWBFMLCmVhTiomu1m6qgpwLgE0U34kJcLoD2wr33iO-o-5zPBqmUx7cajEaAstfEALw_wcB", "https://www.riotgames.com/es"]
});
db.juegos.insert({
    "_id":8,
    "nombre":"Fortnite",
    "imagen": "https://i.pinimg.com/236x/2d/fd/f4/2dfdf4c52ad3cbdd8c65e68a346ed503.jpg",
    "developer":"Epic Games",
    "lanzamiento": new Date("2017-06-25"),
    "carousel":["https://i2.wp.com/fase100.com/wp-content/uploads/2018/12/Temporada-7-de-Fortnite-2.jpg?resize=678%2C381&ssl=1", "https://www.beahero.gg/wp-content/uploads/2020/09/Fortnite-portada.jpg", "https://faros.hsjdbcn.org/sites/default/files/styles/shareimg/public/fortnite-portada_0.jpg?itok=mhRJrS-0"],
    "ligas":["https://www.epicgames.com/fortnite/es-ES/download", "https://es.wikipedia.org/wiki/Fortnite_(videojuego)", "https://www.commonsensemedia.org/game-reviews/fortnite/user-reviews/adult"]
});
// /*
// *-----------------------------Juegos Switch
// */
db.juegos.insert({
    "_id":9, 
    "nombre":"The Legend of Zelda: Breath of the Wild", 
    "imagen": "https://www.otakufreaks.com/wp-content/uploads/2017/03/legend-zelda-breath-wild-box-art-japon-full.jpg", 
    "developer":"Nintendo EPD", 
    "lanzamiento": new Date("2017-03-03"), 
    "carousel":["https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg", "https://i.blogs.es/76c5d4/dcy7upjwsaamry8_phixr/450_1000.jpg", "https://i.blogs.es/397d0c/zelda-breath-of-the-wild-01/450_1000.jpg"], 
    "ligas":["https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiYzrazxbLsAhVJQq0KHWrQCt0QFjAAegQIAhAC&url=https%3A%2F%2Fwww.zelda.com%2Fbreath-of-the-wild%2Fes%2F&usg=AOvVaw30BROFaGAMflj_zoLZXF0d", "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiYzrazxbLsAhVJQq0KHWrQCt0QFjABegQIARAC&url=https%3A%2F%2Fwww.amazon.com.mx%2FLegend-Zelda-Breath-Nintendo-Standard%2Fdp%2FB01MS6MO77&usg=AOvVaw3QlM8ib5MrmzSFXTGPRDA9", "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiYzrazxbLsAhVJQq0KHWrQCt0QFjACegQIAxAC&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FThe_Legend_of_Zelda%3A_Breath_of_the_Wild&usg=AOvVaw32X8YJoC4eZ0PHJAclrnID"]
});


db.juegos.insert({
    "_id":10,
    "nombre":"Super Smash Bros Ultimate", 
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._AC_SL1500_.jpg", 
    "developer":"Bandai Namco Studios", 
    "lanzamiento": new Date("2018-12-07"), 
    "carousel":["https://esports.as.com/2019/01/22/super-smash-bros/Super-Smash-Bros-Ultimate-Norteamerica_1211588837_197530_1440x810.jpg", "https://www.alfabetajuega.com/wp-content/uploads/2019/05/super-smash-bros-ultimate-lucha-e1557726349612.jpg", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/12/super-smash-bros-ultimate_5.jpg"], 
    "ligas":["https://www.smashbros.com/es_ES/", "https://www.smashbros.com/es_LA/fighter/index.html", "https://www.amazon.com.mx/Super-Smash-Bros-Ultimate-Nintendo/dp/B01N5OKGLH"]
});
db.juegos.insert({
    "_id":11,
    "nombre":"Mario Kart 8",
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._AC_SL1500_.jpg",
    "developer":"Nintendo EAD",
    "lanzamiento": new Date("2014-05-30"),
    "carousel":["https://antoniorull.com/wp-content/uploads/2020/01/mario-kart-8-deluxe-switch-1024x683.jpg", "https://media.vandal.net/i/1200x630/12-2019/2019121414212428_1.jpg", "https://i.blogs.es/c65bb0/mario1/450_1000.jpg"],
    "ligas":["https://mariokart8.nintendo.com/es/", "https://www.amazon.com.mx/Mario-Kart-Deluxe-Nintendo-Standard/dp/B01N1037CV", "https://es.wikipedia.org/wiki/Mario_Kart_8"]
});

// /*
// *Blog
// */
db.blog.insert({
    "_id": 1,
    "nombre":"Juan",
    "fecha": new Date(),
    "entrada":"Hola como estas?"
});

db.blog.insert({
    "_id": 2,
    "nombre":"Ramiro",
    "fecha": new Date(),
    "entrada":"Bien y tu bro"
});

db.blog.insert({
    "_id": 3,
    "nombre":"Juan",
    "fecha": new Date(),
    "entrada":"todo bien bro"
});

db.blog.insert({
    "_id": 4,
    "nombre":"Ramiro",
    "fecha": new Date(),
    "entrada":"saca las chelas"
});

db.blog.insert({
    "_id": 5,
    "nombre":"Juan",
    "fecha": new Date(),
    "entrada":"vavava jalo"
});

//--------Busquedas 

//a) Obtener el nombre, imagen, y ficha técnica de una plataforma en específico, por medio de su id.
db.consolas.find({_id:"xbox"});
//b) Obtener una lista de plataformas (nombre, imagen, y ficha técnica) comparando una cadena de texto contra el nombre de la plataforma, utilizando comodines, sin importar mayúsculas o minúsculas.
db.consolas.find({nombre:/^.*T.*$/i});
//d) Obtener la lista de juegos de una plataforma en específico, por medio de su id, obteniendo la siguiente información por cada juego:
//  o Nombre
//  o Imagen de portada
db.consolas.findOne({_id:"pc"})["juegos"].forEach(juego => {
    var doc = db.juegos.findOne({_id:juego});
    print("Nombre: ",doc["nombre"],"\n Imagen: ",doc["imagen"],"\n")
});
//e) Obtener una lista de juegos (nombre, e imagen de portada) comparando una cadena de textocontra el nombre del juego, utilizando comodines, sin importar 
// mayúsculas o minúsculas.
print("\n")
db.juegos.find({nombre:/^.*T.*$/i}).forEach(juego => {
    print("Nombre: ",juego["nombre"],"\n Imagen: ",juego["imagen"],"\n")
});
//f) Obtener la información de un juego en específico, por medio de su id, obteniendo la siguiente información por cada juego:
// o Nombre
// o Imagen de portada
// o Developer
// o Fecha de lanzamiento
// o 3 imágenes para carrusel
// o 3 ligas a páginas relacionadas con el juego
db.juegos.find({_id:2}).pretty();
//g) Obtener la lista de entradas del blog.
db.blog.find().pretty();

