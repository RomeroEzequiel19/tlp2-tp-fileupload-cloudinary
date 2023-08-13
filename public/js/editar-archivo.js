const formArchivo = document.querySelector("#formEditarArchivo");

const archivoId = formArchivo.dataset.id;

// const nombre = document.querySelector("#nombre");

document.addEventListener("DOMContentLoaded", async () => {
  //Se traen los datos a editar
  // const response = await fetch(`/api/${archivoId}`);
  // const data = await response.json();
  //Se muestra en el formulario los datos a actualizar
  // nombre.value = data.nombre;
});

formArchivo.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("file", document.getElementById("file").files[0]);

  try {
    //Se envian los datos al servidor
    const response = await fetch(`/api-archivo/${archivoId}`, {
      method: "PUT",
      body: formData,
    });
    const data = await response.json();
    if (response.status !== 200 && response.status !== 201) {
      console.log("error al subir el archivo");
    }
    alert(data.message);
    window.location.href = "/listado-archivo";
  } catch (error) {
    console.log("Se ha encontrado un error: " + error);
  }
});
