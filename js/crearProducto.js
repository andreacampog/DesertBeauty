import {conexionAPI} from "./conexionAPI.js"

const formulario = document.querySelector('[data-formulario]');

async function crearProducto(evento){
    evento.preventDefault();

    const precio = document.querySelector('[data-precio]').value;
    const nombre= document.querySelector('[data-nombre]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    const imagen = document.querySelector('[data-imagen]').value;    

    try{
        await conexionAPI.enviarProducto(precio,nombre,descripcion,imagen);     
        window.location.href = '../pages/envio-concluido.html';
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener('submit', evento=> crearProducto(evento));