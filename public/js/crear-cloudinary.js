const formCrearArchivo = document.querySelector("#formNuevoArchivoCloudinary");

formCrearArchivo.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("file", document.getElementById("file").files[0]);

  try {
    const response = await fetch("http://localhost:3000/api-cloudinary", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      console.log("Error al cargar la imagen");
    }
    alert(data.message);
    window.location.href = "/listado-cloudinary";
  } catch (error) {
    console.log("Se ha encontrado un error: " + error);
  }
});
