require("dotenv").config();
const express = require("express");
const cors = require("cors"); // middle ware
const router = require("./Controllers/Routes/routing");
const pfserver = express();

//configuring  cors with server app

pfserver.use(cors());
pfserver.use(express.json());
// pfserver.use(jwtmiddle)
pfserver.use(router);
require("./DBconnection/dbconn");
// const jwtmiddle = require('./MiddleWares/jwtMiddleware')
pfserver.use("/upload", express.static("./uploads"));

const PORT = process.env.PORT || 3001;
//activating server
pfserver.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

pfserver.get("/", (req, res) => {
  res.status(200).send("<H1>Hello</H1>");
});
