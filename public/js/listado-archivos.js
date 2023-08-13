// Obtener las tareas automáticamente cuando se carga la página
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM cargado");

  //Pedir las reservas al servidor
  const data = await fetch("http://localhost:3000/api-archivo");
  const archivos = await data.json();

  //Mostrar las reservas en la tabla
  const tbody = document.querySelector("#listadoArchivos");

  let registros = "";
  archivos.forEach((archivos) => {
    registros += `
      <tr class='text-center'>
          <td><img src="images/${archivos.ruta}" alt="fotos" style="width:200px; height:150px;"></td>
          <td>
          <a href="/actualizar-archivo/${archivos.id}" class='btn btn-sm btn-warning'>Editar</a>
          <button onclick=eliminarArchivo(event) class="btn btn-danger btn-sm" data-id="${archivos.id}">Eliminar</button>
          </td> 
      </tr>
      `;
  });
  tbody.innerHTML = registros;
});
