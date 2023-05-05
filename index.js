const usuario = {
    nombre: 'Ivan',
    edad: 24,
    deuda: 0
}

let pedido = []
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

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, debes pagar $${usuario.deuda}`
}

const pagarPedido = montoEntregado => {
    if (montoEntregado < usuario.deuda){
        return `No te alcanza para pagar tu pedido`
    }else if (montoEntregado === usuario.deuda) {
        usuario.deuda = 0
        return `Tu pedido ha sido pagado`
    } else {
        usuario.deuda = 0
        return `Tu pedido ha sido pagado y tu cambio es de $${montoEntregado - usuario.deuda}`
    }
}