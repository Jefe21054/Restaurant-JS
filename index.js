const usuario = {
    nombre: 'Ivan',
    edad: 24,
    deuda: 0
}

const pedido = []
let costoPedido = 0


const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    for (let producto of productos) {
        console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
    }
}

const pedirProducto = codigo => {
    if (!codigo || typeof codigo === 'number' || typeof codigo === 'boolean') return 'Ingrese un codigo valido'

    const productoEncontrado = productos.find(producto => producto.codigo === codigo)
    if (!productoEncontrado) return 'El producto no existe'

    pedido.push(productoEncontrado)
    console.log('El producto ha sido agregado a su pedido. Su pedido es:')
    return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
    let costo = 0
    for (unidad of pedido) {
        costo += unidad.costo
    }
    costoPedido = costo
    return costoPedido
}