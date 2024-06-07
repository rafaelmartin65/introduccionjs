//Eventos que ocuren con el ratón

const nav = document.querySelector('.navegacion');

// Vamos a registrar el evenListener par el navbar
nav.addEventListener('mouseenter', () => {
    console.log("entrando a la navegción");
    nav.style.backgroundColor = "white";
});

nav.addEventListener('mouseout', () => {
    console.log("saliendo a la navegción");
    nav.style.backgroundColor = "transparent";
});

//mousedown = cuando presionamos
//el click = similar es más utilizado que el anterior