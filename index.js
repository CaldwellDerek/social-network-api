const express = require("express");
const db = requrie("./config/connection");
const routes = require("./controllers");

const PORT = process.env.PORT || 3000;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
app.use(routes);

db.once("open", () => {
    server.listen(PORT, () => {
        console.log(`SERVER RUNNING: Listening on port ${PORT}...`);
    })
})