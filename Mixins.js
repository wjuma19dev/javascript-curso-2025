// Design Patterns de mixins

class Persona {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }
}
class Cliente {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }
}

const reporte = {
  generarEstadoDeCuenta() {
    console.log(
      `El estado de cuenta del señor ${this.nombre} fue enviado al correo ${this.correo}`
    );
  },
};

Object.assign(Persona.prototype, reporte);
Object.assign(Cliente.prototype, reporte);

const persona = new Persona("joe doe", "joedoe@gmail.com");
const cliente = new Cliente("melinda vargas", "melindavargas@gmail.com");
console.log(persona);
console.log(cliente);
persona.generarEstadoDeCuenta();
cliente.generarEstadoDeCuenta();
