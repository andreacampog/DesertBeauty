import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector('[data-lista ]');

export default function crearCard(precio,nombre,descripcion,imagen,id){
    
    const producto = document.createElement('div');
    
    producto.className= 'product-card';
    
    producto.innerHTML=`
    <img src="${imagen}" alt="">
    
    <div class="product-info" >
        <div>
            <p>$${precio}</p>
            <p>${nombre}</p>
            <p>${descripcion}</p>
        </div>
    
        <figure>
            <span class="material-symbols-outlined delete" id="borrar" >delete</span>
        </figure>
    </div>
    
    `;

    const botonEliminar = producto.querySelector('#borrar');
    
    botonEliminar.addEventListener('click',()=> conexionAPI.eliminarProducto(id,producto));

    return producto;

    
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();    
    if(listaAPI.length != 0){ 
        listaAPI.forEach(producto => lista.appendChild(crearCard(producto.precio, producto.nombre, producto.descripcion, producto.imagen, producto.id)))
    }else{
        const texto = document.querySelector('#mensaje-lista-vacia');
        texto.innerHTML = "No se han agregado productos";

    }
}

listarProductos();