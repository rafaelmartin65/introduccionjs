//Arrow functions en métodos de propiedad

const reproductor = {
    cancion:'',
    reproducir: id => console.log(`Reproduciendo cancion id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`borrando cancion con id ${id}`),
    creaPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Repoduciendo la Playlist ${nombre}`),

    //también existen los set y get si tienes experiencia con estos términos
    //y si no, set en para añadir un valor y get es para obtenerlo...

    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)

    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.borrar(20);
reproductor.creaPlaylist(`POP`);
reproductor.reproducirPlaylist(`POP`);

//Probando set y get

reproductor.nuevaCancion = `Du hast`;
reproductor.obtenerCancion;