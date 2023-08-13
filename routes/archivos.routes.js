const { Router } = require("express");
const router = Router();

const {
  // renderFormEditarArchivo,
  renderListaArchivos,
  renderPrincipal,
  obtenerArchivos,
  crearArchivo,
  renderFormNuevoArchivo,
} = require("../controllers/archivos.controllers");

//Renderizar pantallas
router.get("/", renderPrincipal);
router.get("/listado-archivo", renderListaArchivos);
router.get("/crear-archivo", renderFormNuevoArchivo);

//Funciones
router.get("/api-archivo", obtenerArchivos);
router.post("/api-archivo", crearArchivo);

module.exports = router;
