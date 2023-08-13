const { Router } = require("express");
const router = Router();

const {
  renderListaCloudinary,
  obtenerCloudinary,
  crearArchivo,
  renderFormNuevoArchivo,
  renderFormEditarArchivo,
  actualizarArchivo,
  eliminarArchivo,
} = require("../controllers/cloudinary.controllers");

//Renderizar pantallas
router.get("/listado-cloudinary", renderListaCloudinary);
// router.get("/crear-archivo", renderFormNuevoArchivo);
// router.get("/actualizar-archivo/:id", renderFormEditarArchivo);

//Funciones
router.get("/api-cloudinary", obtenerCloudinary);
// router.post("/api-archivo", crearArchivo);
// router.put("/api-archivo/:id", actualizarArchivo);
// router.get("/api-eliminar/:id", eliminarArchivo);

module.exports = router;
