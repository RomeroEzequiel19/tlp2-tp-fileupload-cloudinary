const ctrl = {};

ctrl.renderPrincipal = (req, res) => {
    res.render("index");
  };

ctrl.renderListaArchivos = (req, res) => {
  res.render("listado-archivo");
};
module.exports = ctrl;