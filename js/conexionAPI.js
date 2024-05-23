async function listarProductos(){
    const conexion = await fetch('http://localhost:3000/productos');
    const conexionConvertida = conexion.json();
    if(!conexion.ok){
        throw new Error('Ha ocurrido un error al enviar el producto');
    }

    console.log(conexionConvertida)
    return conexionConvertida;
}
//listarProductos();

async function enviarProducto(precio,nombre,descripcion,imagen){
    const conexion = await fetch ('http://localhost:3000/productos',{
        method: 'POST',
        headers:{'Content-type': 'aplication/json'},
        body:JSON.stringify({
            precio:`${precio}`,
            nombre:`${nombre}`,
            descripcion:`${descripcion}`,
            imagen:`${imagen}`
        })
    })
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;

}
async function buscarProducto(palabraClave){
    const conexion = await fetch(`http://localhost:3000/productos?q=${palabraClave}`);
    if(!conexion.ok){
        throw new Error('error');
    }
    const conexionConvertida = await conexion.json();  
    return conexionConvertida;  
}


async function eliminarProducto(id){
    const conexion = await fetch (`http://localhost:3000/productos/${id}`,{
     method: 'DELETE'
    });    

    if(!conexion.ok){
        throw new Error('error');
    }
        
    const conexionConvertida= conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;
    
}



export const conexionAPI = {
    listarProductos,
    enviarProducto,
    buscarProducto,
    eliminarProducto
};


