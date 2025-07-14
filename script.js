// Lista inicial de productos/servicios ficticios de ARGUDO
const productos = [
  {
    nombre: "Escolta VIP",
    precio: "$150/hora",
    descripcion: "Protección personalizada para personas de alto perfil."
  },
  {
    nombre: "Monitoreo Remoto",
    precio: "$80/mes",
    descripcion: "Sistema inteligente de cámaras y sensores."
  },
  {
    nombre: "Control Biométrico",
    precio: "$200/instalación",
    descripcion: "Acceso restringido mediante huella o reconocimiento facial."
  }
];

// Función para renderizar los productos en el DOM
function renderizarProductos() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = ""; // Limpiar antes de renderizar

  productos.forEach(producto => {
    const li = document.createElement("li");
    li.className = "producto";
    li.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p>${producto.descripcion}</p>
    `;
    lista.appendChild(li);
  });
}

// Función para agregar un nuevo producto manualmente
function agregarProducto() {
  const nuevoProducto = {
    nombre: prompt("Nombre del servicio:", "Ejemplo: Consultoría Cibernética"),
    precio: prompt("Precio del servicio:", "Ejemplo: $99 por sesión"),
    descripcion: prompt("Breve descripción del servicio:", "Ejemplo: Análisis de vulnerabilidades.")
  };

  if (nuevoProducto.nombre && nuevoProducto.precio && nuevoProducto.descripcion) {
    productos.push(nuevoProducto);
    renderizarProductos();
  } else {
    alert("Por favor, completa todos los campos.");
  }
}

// Renderiza los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos();
});