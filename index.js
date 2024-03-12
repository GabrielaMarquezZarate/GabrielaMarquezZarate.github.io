
//<------- Código para los carouseles ------->
function configurarCarousel(filaSelector, flechaIzquierdaId, flechaDerechaId, floresSelector) {
	//Selecciona elementos del html
    const fila = document.querySelector(filaSelector);
    const flechaIzquierda = document.getElementById(flechaIzquierdaId);
    const flechaDerecha = document.getElementById(flechaDerechaId);
    const flores = document.querySelectorAll(floresSelector);

	//Acciones al dar click la flecha derecha del carousel
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;
    });
    //Acciones al dar click la flecha izquierda del carousel
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;
    });

	//Acción para que la imagen se haga mas grande
    flores.forEach((flor) => {
        flor.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                flores.forEach(flor => flor.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

	//Acción para quitar los efectos de hover al salir del carrousel
    fila.addEventListener('mouseleave', () => {
        flores.forEach(pelicula => pelicula.classList.remove('hover'));
    });
}

// Configurar carousel
configurarCarousel('.contenedor-carousel-1', 'flecha-izquierda-1', 'flecha-derecha-1', '.flores-1');



