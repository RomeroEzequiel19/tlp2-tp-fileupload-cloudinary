const Archivo = require("../models/Archivo");
const ctrl = {};

//Direccionar pantallas
ctrl.renderPrincipal = (req, res) => {
  res.render("index");
};

ctrl.renderListaArchivos = (req, res) => {
  res.render("listado-archivo");
};

ctrl.renderFormNuevoArchivo = (req, res) => {
  res.render("crear-archivo");
};

ctrl.renderFormEditarArchivo = (req, res) => {
  const { id } = req.params;
  res.render("editar-archivo", { id });
};

//Acciones

ctrl.obtenerArchivos = async (req, res) => {
  try {
    const archivos = await Archivo.findAll({
      where: {
        tipo_subida: "fileupload",
      },
    });

    return res.json(archivos);
  } catch (error) {
    console.log("Error al obtener las archivos", error);
    return res.status(500).json({
      message: "Error al obtener las archivos",
    });
  }
};

ctrl.crearArchivo = async (req, res) => {
  try {
    const tipo_subida = "fileupload";
    console.log(req.files);
    const file = req.files.file;

    const filename = file.name;
    console.log(filename);
    const nuevoArchivo = await Archivo.create({
      ruta: filename,
      tipo_subida: tipo_subida,
    });

    file.mv("public/images/" + filename, function (err) {
      if (err) {
        console.log("Error: " + err);
        return res.status(500).json(err);
      }
      return res.status(201).json({
        message: "Archivo creado con éxito",
      });
    });

    // await nuevoArchivo.save();
  } catch (error) {
    console.log("Error al crear las Archivos", error);
    res.status(500).json(error);
  }
};

ctrl.actualizarArchivo = async (req, res) => {
  const id = req.params.id;

  try {
    const file = req.files.file;
    const filename = file.name;

    const archivo = await Archivo.update(
      {
        ruta: filename,
        tipo_subida: "fileupload",
      },
      {
        where: {
          id,
        },
      }
    );

    file.mv("public/images/" + filename, function (err) {
      if (err) {
        console.log("Error: " + err);
        return res.status(500).json(err);
      }
      return res.status(201).json({
        message: "Archivo actualizado con éxito",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al actualizar archivo",
    });
  }
};

ctrl.eliminarArchivo = async (req, res) => {
  const { id } = req.params;

  const archivoEliminado = await Archivo.destroy({
    where: { id },
  });
  res.render("");
};

module.exports = ctrl;
