const formCrearArchivo = document.querySelector("#formNuevoArchivo");
alert("Hola");
formCrearArchivo.addEventListener("submit", async (e) => {
  alert("Hola2");

  e.preventDefault();

  const formData = new FormData();
  formData.append("file", document.getElementById("file").files[0]);

  try {
    const response = await fetch("http://localhost:3000/api-archivo", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      console.log("Error al cargar la imagen");
    }
    swal({
      title: "Realizado",
      text: "Haz clic en el botón",
      icon: "success",
    });
    setTimeout(() => {
      window.location.href = "/listado-archivo";
    }, 2000);
  } catch (error) {
    console.log("Se ha encontrado un error: " + error);
  }
});
