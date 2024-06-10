// Vamops a ver eventos que suceden con el scroll del sitio web

//Es muy común que muchos sitios agreguen fucionalidad de que al dar scroll y llegar a ver un elemento
//ese tenga alguna animación , eso se hace con eventos con el ratón

window.addEventListener('scroll', ()=>{
   /* let scrollPosition = window.scrollY;
    if(scrollPosition > 200){
        console.log(scrollPosition);
    }
*/
    
    
    console.log('Scrolling');
})

//Destacar un elemento al dar scroll
const premium = document.querySelector('.premium');
const ubicacion = premium.getBoundingClientRect();

//Este método te da el tamaño de un elemento y su ubicacion actual...
console.log(ubicacion);

if(ubicacion.top < 100){
    console.log("Está visible");
}else{
    console.log("No está visible...");
}

