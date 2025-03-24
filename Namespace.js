/**
  Namespace Pattern

  Namespace can dramatically reduce the number of globals required and at the same time prevents the collisions or excessive name prefixing .
  Its important to know that javascript doesn't have namespaces built into the language syntax , but you can achieve this feature quite easy .Instead of adding functions,objects and variables into global scope you can create one global object and add all the functionality.

  https://dev.to/scuz12/javascript-namespace-pattern-b9p
 */

const restaurantApp = {};

restaurantApp.platillos = [
  { plato: "Pizza familiar", precio: 450 },
  { plato: "Tacos", precio: 645 },
  { plato: "Pasta a la carbonara", precio: 230 },
];

restaurantApp.funciones = {
  mostrarPlatilos: () => {
    restaurantApp.platillos.map((platillo, index) => {
      console.log(`${index} - ${platillo.plato}`);
    });
  },
  ordenar: (id) => {
    console.log(
      `La orden para el plato ${restaurantApp.platillos[id].plato} esta en proceso, favor esperar.`
    );
  },
  agregar: (plato, precio) => {
    restaurantApp.platillos.push({
      plato,
      precio,
    });
  },
};

restaurantApp.funciones.agregar("Pezcado", 230);
restaurantApp.funciones.ordenar(3);
console.log(restaurantApp);
restaurantApp.funciones.mostrarPlatilos();
