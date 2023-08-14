// Obtener las tareas automáticamente cuando se carga la página
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM cargado");

  //Pedir las reservas al servidor
  const data = await fetch("http://localhost:3000/api-cloudinary");
  const archivos = await data.json();

  //Mostrar las reservas en la tabla
  const tbody = document.querySelector("#listadoCloudinary");

  let registros = "";
  archivos.forEach((archivos) => {
    registros += `
      <tr class='text-center'>
          <td><a href="${archivos.ruta}" target="_blank" rel="noopener noreferrer">Link de la Imagen</a></td>
          <td>
          <a href="/actualizar-cloudinary/${archivos.id}" class='btn btn-sm btn-warning'>Editar</a>
          <a href="/eliminar-cloudinary/${archivos.id}" class='btn btn-sm btn-danger'>Eliminar</a>
          </td> 
      </tr>
      `;
  });
  tbody.innerHTML = registros;
});
