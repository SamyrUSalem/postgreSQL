//O Controller é aquele que trabalha com as requisições que vem das views e passa para o model que por sua vez conversa com o banco de dados
const Planet = require("../models/Planet")

module.exports = {
    async store(req, res) {//POST
        const { name, position } = req.body //São os dados que serão enviados para o banco

        const planet = await Planet.create({ name, position })
        return res.json(planet)
    },
    async index(req, res) {//GET
        const planets = await Planet.findAll();

        return res.json(planets) //A forma q a resposta terá
    }
}