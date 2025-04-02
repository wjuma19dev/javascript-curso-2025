class inputHTML {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }
  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}" />`;
  }
}

class HTMLFactory {
  crearElemento(tipo, nombre) {
    switch(tipo) {
      case 'text':
        console.log('Elemento creado')
        return new inputHTML('text', nombre)
      default:
        return;
    }
  }
}

const elemento = new HTMLFactory()
const inputText = elemento.crearElemento('text', 'nombre-cliente')
console.log(inputText.crearInput())