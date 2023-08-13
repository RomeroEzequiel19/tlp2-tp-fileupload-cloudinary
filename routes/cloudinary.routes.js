const { Router } = require("express");
const router = Router();

const {
  renderListaCloudinary,
  obtenerCloudinary,
  crearCloudinary,
  renderFormNuevoCloudinary,
  renderFormEditarArchivo,
  actualizarArchivo,
  eliminarArchivo,
} = require("../controllers/cloudinary.controllers");

//Renderizar pantallas
router.get("/listado-cloudinary", renderListaCloudinary);
router.get("/crear-cloudinary", renderFormNuevoCloudinary);
// router.get("/actualizar-archivo/:id", renderFormEditarArchivo);

//Funciones
router.get("/api-cloudinary", obtenerCloudinary);
router.post("/api-cloudinary", crearCloudinary);
// router.put("/api-archivo/:id", actualizarArchivo);
// router.get("/api-eliminar/:id", eliminarArchivo);

module.exports = router;
