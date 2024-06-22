/*
    ACTIVIDAD EN CLASE: Handlebars con express

    Realizar un formulario en una nueva plantilla.

    1. Se creará un archivo "register.handlebars" como nueva plantilla,
       donde se colocará un form.
    2. Dicho form debe servir para registrar un usuario, por lo que
       contará con nombre, correo, y contraseña.
    3. Enviar los datos a una ruta POST ‘/user’, y guardar el usuario
       en un arreglo. Confirmar que el guardado se realice exitosamente.
*/

import express from "express";
import paths from "./utils/paths.js";
import homeRouter from "./routes/home.router.js";
import serverSocketIO from "./config/socket.config.js";
import configHandlebars from "./config/handlebars.config.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

// configuracion de handlebars
configHandlebars.config(server);

server.use("/api/public", express.static(paths.public));

// Declaración de enrutadores
server.use("/home", homeRouter);

// Método oyente de solicitudes
const serverHTTP = server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
    // configurando el servidor de websocket
serverSocketIO.config(serverHTTP);