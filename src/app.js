const express = require('express');
const server = express();
const cors = require('cors');

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinode");

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

const postRoute = require("./api/routes/postRoute");
postRoute(server);

server.listen(3000)