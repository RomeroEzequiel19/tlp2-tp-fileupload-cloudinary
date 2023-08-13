const { Router } = require("express");
const router = Router();

const {
    // renderFormEditarArchivo,
    renderListaArchivos,
    renderPrincipal
  
  } = require("../controllers/archivos.controllers");

  router.get("/", renderPrincipal);
  
router.get("/listado-archivo", renderListaArchivos);

module.exports = router;