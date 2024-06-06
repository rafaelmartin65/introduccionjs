/** No siempre se usa el traversing */
const btnFlotante = document.querySelector('.btn-flotante');

console.log(btnFlotante);

const footer = document.querySelector('.footer');

console.log(footer);

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Mostrar footer';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Ocultar footer';
        
    }

}