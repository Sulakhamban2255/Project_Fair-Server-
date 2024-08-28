const express = require("express");
const userController = require("../UserController");
const projectContrioller = require("../projectController");
const jwtmiddle = require("../MiddleWares/jwtMiddleware");
const multerMiddle = require("../MiddleWares/multerMiddleWare");

const route = express.Router();
route.post("/reg", userController.register);
route.post("/log", userController.login);
route.patch("/profile", jwtmiddle, multerMiddle.single("picture"), userController.profileUpdate)
route.post(
  "/addProject",
  jwtmiddle,
  multerMiddle.single("picture"),
  projectContrioller.addProject
);
route.get("/userprojects", jwtmiddle, projectContrioller.getUserProjects);
route.get("/allprojects", projectContrioller.getAllProjects);
route.delete(
  "/delete-project/:id",
  jwtmiddle,
  projectContrioller.deleteProject
);
route.put(
  "/updateproject/:id",
  jwtmiddle,
  multerMiddle.single("picture"),
  projectContrioller.updateProject
);

module.exports = route;
