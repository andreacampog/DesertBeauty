import { conexionAPI } from "./conexionAPI.js";


export default async function eliminarProducto(id,producto){
    try{
        await conexionAPI.eliminarProducto(id);
        producto.remove();

        const lista = document.querySelector('[data-lista]');   
        if(lista.children.length === 0){
            lista.innerHTML = `<h2 class= "mensaje-lista-vacia"> No quedan productos por mostrar </h2>`;
            console.log('no hay productos')
        }
    }catch(error)
    {
        console.error('error al eliminar el producto: ',error)
    }    
}


