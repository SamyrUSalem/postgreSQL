const express = require("express")
const routes = express.Router();

const PlanetController = require("../controller/planetController")

routes.post("/planets", PlanetController.store) //O nome dessa minha requisição é "/planets"
routes.get("/planets", PlanetController.index) //Ira realizar uma busca
routes.put("/planets/:id", PlanetController.put) //Será feita uma atualização do dado referenciado
routes.delete("/planets/:id", PlanetController.delete) //Sera usada para deletar algum dado

module.exports = routes