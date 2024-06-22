import { Server } from "socket.io";

const config = (serverHTTP) => {
    const serverIO = new Server(serverHTTP);

    serverIO.on("connection", (socket) => {
        const id = socket.client.id;
        console.log("Conexion extablecida", id);

        socket.on("saludo", (data) => {
            console.log(data.message);

            serverIO.emit("saludo-respuesta", { message: "Hola Cliente" });
        });
    });
};

export default { config };