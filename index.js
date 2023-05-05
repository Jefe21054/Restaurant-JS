const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    for (let producto of productos) {
        console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
    }
}

mostrarMenu()