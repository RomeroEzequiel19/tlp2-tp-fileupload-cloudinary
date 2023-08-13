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
          <td><img src="images/${archivos.ruta}" alt="fotos" style="width:200px; height:150px;"></td>
          <td>${archivos.ruta}</td>
          <td>
          <a href="/actualizar-archivo/${archivos.id}" class='btn btn-sm btn-warning'>Editar</a>
          <a href="/api-eliminar/${archivos.id}" class='btn btn-sm btn-warning'>Editar</a>
          </td> 
      </tr>
      `;
  });
  tbody.innerHTML = registros;
});

const eliminarArchivo = async (event) => {
  console.log(event);
  const id = event.target.dataset.id;

  const response = await fetch(`/api-archivo/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  alert(data.message);

  window.location.href = "/listado-archivo";
};

function eliminar() {
  alert("Eliminar");
}
