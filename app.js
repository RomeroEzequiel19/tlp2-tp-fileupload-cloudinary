// Imports
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const upload = require("express-fileupload");
const path = require("path");
require("dotenv").config();
require("ejs");

//Se conecta la BD

const { conectarDB } = require("./database");

conectarDB();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));
app.use(
  upload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/archivos.routes"));
app.use(require("./routes/cloudinary.routes"));

app.use((req, res, next) => {
  return res.status(404).render("404");
});

// Starting the server
app.listen(port, () =>
  console.log(`The Server is running on http://localhost:${port}`)
);
