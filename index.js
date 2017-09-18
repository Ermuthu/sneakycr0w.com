// DEPENDENCIES

const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join("dist", "index.html"));
});

const port = process.env.PORT || "3001";
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () =>
  console.log(`Server is listening on localhost:${port}`)
);
