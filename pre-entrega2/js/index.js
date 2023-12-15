// Seccion Clientes

let clientes = [];

class Cliente {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.montoDolares = 0;
    this.montoEuros = 0;
    this.montoReales = 0;
  }

  comprarDolares(monto) {
    this.montoDolares += monto;
  }

  comprarEuros(monto) {
    this.montoEuros += monto;
  }

  comprarReales(monto) {
    this.montoReales += monto;
  }

  mostrarCompras() {
    console.log(
      `${this.nombre} ${this.apellido} ha comprado:\nDólares: ${this.montoDolares}\nEuros: ${this.montoEuros}\nReales: ${this.montoReales}`
    );
    alert(
      `${this.nombre} ${this.apellido} ha comprado:\nDólares: ${this.montoDolares}\nEuros: ${this.montoEuros}\nReales: ${this.montoReales}`
    );
  }
}

const registrarCliente = () => {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let cliente = new Cliente(nombre, apellido);
  clientes.push(cliente);
  console.log(`Cliente registrado correctamente: ${nombre} ${apellido}`);
  alert("Cliente registrado correctamente.");
};

// Seccion Menu

const menuClientes = () => {
  let opcion = prompt(`
    Menu de Clientes
    1 - Registrar Cliente
    2 - Mostrar Compras
    3 - Salir
  `);

  switch (opcion) {
    case "1":
      registrarCliente();
      break;
    case "2":
      mostrarCompras();
      break;
    case "3":
      console.log("Saliendo del Menú de Clientes");
      alert("Saliendo del Menú de Clientes");
      break;
    default:
      console.log("Opción no válida");
      alert("Opción no válida");
  }
};

const realizarCompra = (cliente) => {
  let opcion = prompt(`
    ¿Qué moneda quiere comprar?
    1 - Dólares
    2 - Euros
    3 - Reales
    4 - Volver
  `);

  switch (opcion) {
    case "1":
      let montoDolares = parseFloat(prompt("Ingrese el monto a comprar en dólares"));
      cliente.comprarDolares(montoDolares);
      console.log(`${cliente.nombre} ${cliente.apellido} ha comprado ${montoDolares} dólares.`);
      alert(`${cliente.nombre} ${cliente.apellido} ha comprado ${montoDolares} dólares.`);
      break;
    case "2":
      let montoEuros = parseFloat(prompt("Ingrese el monto a comprar en euros"));
      cliente.comprarEuros(montoEuros);
      console.log(`${cliente.nombre} ${cliente.apellido} ha comprado ${montoEuros} euros.`);
      alert(`${cliente.nombre} ${cliente.apellido} ha comprado ${montoEuros} euros.`);
      break;
    case "3":
      let montoReales = parseFloat(prompt("Ingrese el monto a comprar en reales"));
      cliente.comprarReales(montoReales);
      console.log(`${cliente.nombre} ${cliente.apellido} ha comprado ${montoReales} reales.`);
      alert(`${cliente.nombre} ${cliente.apellido} ha comprado ${montoReales} reales.`);
      break;
    case "4":
      console.log("Volviendo al Menú Principal");
      alert("Volviendo al Menú Principal");
      break;
    default:
      console.log("Opción no válida");
      alert("Opción no válida");
  }
};

const mostrarCompras = () => {
  let clienteSeleccionado = prompt("Ingrese el nombre del cliente para mostrar sus compras");
  let cliente = clientes.find((c) => c.nombre === clienteSeleccionado);

  if (cliente) {
    cliente.mostrarCompras();
  } else {
    console.log("Cliente no encontrado.");
    alert("Cliente no encontrado.");
  }
};

const menuPrincipal = () => {
  while (true) {
    let opcion = prompt(`
      Bienvenido a nuestra APP para comprar divisas
      1 - Clientes
      2 - Comprar Divisas
      3 - Salir
    `);

    switch (opcion) {
      case "1":
        menuClientes();
        break;
      case "2":
        let nombreCliente = prompt("Ingrese el nombre del cliente");
        let cliente = clientes.find((c) => c.nombre === nombreCliente);
        if (cliente) {
          realizarCompra(cliente);
        } else {
          console.log("Cliente no encontrado. Regístrese primero.");
          alert("Cliente no encontrado. Regístrese primero.");
        }
        break;
      case "3":
        console.log("Saliendo de la APP");
        alert("Saliendo de la APP");
        return;
      default:
        console.log("Opción no válida");
        alert("Opción no válida");
    }
  }
};

menuPrincipal();