const productos = [
    {
        nombre: 'Hamburguesa Simple',
        costo: 20,
        codigo: 'H100'
    }, 
    {
        nombre: 'Hamburguesa Doble',
        costo: 30,
        codigo: 'H200'
    }, 
    {
        nombre: 'Papas fritas',
        costo: 8,
        codigo: 'P100'
    },
    {
        nombre: 'Refresco Personal',
        costo: 6,
        codigo: 'R100'
    }
]

const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    for (let producto of productos) {
        console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
    }
}