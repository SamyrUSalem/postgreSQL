const express = require("express")
const routes = express.Router();

const PlanetController = require("../controller/planetController")

routes.post("/planets", PlanetController.store) //O nome dessa minha requisição é "/planets"
routes.get("/planets", PlanetController.index) //

module.exports = routes