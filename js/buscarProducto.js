import { conexionAPI } from "./conexionAPI.js";

import crearCard from './mostrarProductos.js'


const inputElemento= document.getElementById('buscar');
const boton = document.querySelector('[data-boton-busqueda]');


async function filtrarProducto(evento){
    evento.preventDefault();

    const datosBusqueda= document.querySelector('[data-busqueda]').value;
    console.log(datosBusqueda);

    const busqueda = await conexionAPI.buscarProducto(datosBusqueda);  

    console.log(busqueda);

    const lista = document.querySelector('[data-lista]');   

    while(lista.firstChild){  //verifica si existen elementos hijo en un contenedor
        lista.removeChild(lista.firstChild); //elimina elementos hijo en un contenedor        
    }
    
    busqueda.forEach(p => lista.appendChild(crearCard(p.precio,p.nombre,p.descripcion,p.imagen)));

    if(busqueda.length == 0){
        lista.innerHTML = `<h2 class="mensaje-busqueda">No fueron encontrados elementos para ${datosBusqueda}</h2>`
   }  

}

boton.addEventListener('click', evento=> filtrarProducto(evento));

inputElemento.addEventListener('keydown', function(e){
        if(e.code == 'Enter'){
            filtrarProducto(e);
        }
});
    
