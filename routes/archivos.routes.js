const { Router } = require("express");
const router = Router();

const {
  // renderFormEditarArchivo,
  renderListaArchivos,
  renderPrincipal,
  obtenerArchivos,
  crearArchivo,
  renderFormNuevoArchivo,
  renderFormEditarArchivo,
  actualizarArchivo,
} = require("../controllers/archivos.controllers");

//Renderizar pantallas
router.get("/", renderPrincipal);
router.get("/listado-archivo", renderListaArchivos);
router.get("/crear-archivo", renderFormNuevoArchivo);
router.get("/actualizar-archivo/:id", renderFormEditarArchivo);

//Funciones
router.get("/api-archivo", obtenerArchivos);
router.post("/api-archivo", crearArchivo);
router.put("/api-archivo/:id", actualizarArchivo);

module.exports = router;
