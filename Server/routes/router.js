const express = require("express");
const route = express.Router();

const services = require("../services/render");

route.get("/", services.homeRoutes);

route.get("/video_chat", services.video_chat);
route.get("/text_chat", services.text_chat);

module.exports = route;
