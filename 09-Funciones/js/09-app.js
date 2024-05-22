/* vamos a ver que son los métodos de propiedad, que quiero decir son las funciones
con una sintaxis similar a la de un método... */

/* también llega a ser muy muy comunes sobre todo, porque es un objeto grande con todas 
las funciones */

const reproductor = {
    reproducir: function (id){
        console.log(`reproduciendo canción id ${id}` );
    },

    pausar: function(){
        console.log("pausando la canción");
    },

    borrar: function(id){
        console.log(`borando la canción de id ${id}`);
    },

    cearPlaylist: function(nombre){
        console.log(`creando la playlist ${nombre}`);
    },

    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la Playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();


//también los métodos pueden quedarse por fuera
//reproductor.borrar = function(id){    
//}
reproductor.borrar(20);
reproductor.cearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');




