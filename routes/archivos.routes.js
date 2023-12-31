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
  eliminarArchivo,
} = require("../controllers/archivos.controllers");

//Renderizar pantallas
router.get("/", renderPrincipal);
router.get("/listado-archivo", renderListaArchivos);
router.get("/crear-archivo", renderFormNuevoArchivo);
router.get("/actualizar-archivo/:id", renderFormEditarArchivo);
router.get("/local", (req, res) => {
  res.render("local");
});

//Funciones
router.get("/api-archivo", obtenerArchivos);
router.post("/api-archivo", crearArchivo);
router.put("/api-archivo/:id", actualizarArchivo);
router.get("/eliminar-archivo/:id", eliminarArchivo);

module.exports = router;
