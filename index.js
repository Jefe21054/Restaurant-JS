/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * LOGICA PARA CREAR PEDIDOS Y COBRARLOS
 * AL USUARIO
 */

const usuario = {
  nombre: 'Ivan',
  edad: 24,
  deuda: 0,
}

let pedido = []
let costoPedido = 0

/**
 * Lista de todos los productos del menu en un
 * formato amigable
 */
const mostrarMenu = () => {
  console.log('CODIGO - NOMBRE PRODUCTO - COSTO')
  for (const producto of productos) {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
  }
}

/**
 * Funcion que permite a un usuario pedir un producto
 * del menu mostrado con anterioridad
 */
const pedirProducto = (codigo) => {
  if (!codigo || typeof codigo === 'number' || typeof codigo === 'boolean')
    return 'Ingrese un codigo valido'

  const productoEncontrado = productos.find(
    (producto) => producto.codigo === codigo,
  )
  if (!productoEncontrado) return 'El producto no existe'

  pedido.push(productoEncontrado)
  console.log('El producto ha sido agregado a su pedido. Su pedido es:')
  return verPedido()
}

// Funcion que permite ver un pedido
const verPedido = () => pedido

/**
 * Funcion que permite calcular el costo de un pedido
 * completo realizado por el usuario
 */
const calcularCosto = () => {
  let costo = 0
  for (unidad of pedido) {
    costo += unidad.costo
  }
  costoPedido = costo
  return costoPedido
}

// Funcion que permite finalizar un pedido
const finalizarPedido = () => {
  calcularCosto()
  usuario.deuda = costoPedido

  pedido = []
  costoPedido = 0

  return `${usuario.nombre}, debes pagar $${usuario.deuda}`
}
/**
 * Funcion que permite pagar todo un pedido y
 * entregar cambio si fuera necesario
 */
const pagarPedido = (montoEntregado) => {
  if (typeof montoEntregado === 'number') {
    if (montoEntregado < usuario.deuda) {
      return 'No te alcanza para pagar tu pedido'
    } else if (montoEntregado === usuario.deuda) {
      usuario.deuda = 0
      return 'Tu pedido ha sido pagado'
    } else {
      console.log(
        `Tu pedido ha sido pagado y tu cambio es de $${
          montoEntregado - usuario.deuda
        }`,
      )
      usuario.deuda = 0
      return 'Deuda pagada'
    }
  } else {
    return 'Dato ingresado de forma erronea'
  }
}
