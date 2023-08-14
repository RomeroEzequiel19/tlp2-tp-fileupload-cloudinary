const { Router } = require("express");
const router = Router();

const {
  renderListaCloudinary,
  obtenerCloudinary,
  crearCloudinary,
  renderFormNuevoCloudinary,
  renderFormEditarCloudinary,
  actualizarCloudinary,
  eliminarArchivo,
} = require("../controllers/cloudinary.controllers");

//Renderizar pantallas
router.get("/listado-cloudinary", renderListaCloudinary);
router.get("/crear-cloudinary", renderFormNuevoCloudinary);
router.get("/actualizar-cloudinary/:id", renderFormEditarCloudinary);

//Funciones
router.get("/api-cloudinary", obtenerCloudinary);
router.post("/api-cloudinary", crearCloudinary);
router.put("/api-cloudinary/:id", actualizarCloudinary);
// router.get("/api-eliminar/:id", eliminarArchivo);

module.exports = router;
