function Vendedor(nombre) {
  this.nombre = nombre;
  this,sala = null;
}

Vendedor.prototype = {
  oferta(articulo, precio) {
    console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`)
  },
  vendido(comprador) {
    console.log(`Vendido a ${comprador.nombre}`)
  }
}

function Comprador(nombre) {
  this.nombre = nombre;
  this,sala = null;
}

Comprador.prototype = {
  oferta(cantidad, comprador) {
    console.log( `${comprador.nombre}: ${cantidad}` )
  }
}

function Subasta() {
  let compradores = {};

  return {
    registrar(usuario) {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
    }
  }
}



const juan = new Vendedor('juan');
const pablo = new Comprador('pablo');
const maria = new Comprador('maria');
const subasta = new Subasta()

subasta.registrar(pablo)
subasta.registrar(juan)
subasta.registrar(maria)

juan.oferta('Honda CRV', 1350000)

maria.oferta(300, maria)
pablo.oferta(600, pablo)

juan.vendido(pablo)

console.log(juan)
console.log(pablo)
console.log(maria)
// console.log(Subasta())
