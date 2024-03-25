const express = require("express")
const routes = require("./routes")

const app = express() //COm esse app, irei poder manipular as requisições como: Arquivos Jsons, rotas e dizer qual a porta ser autilizado

app.use(express.json()) //Para arquivos JSON
app.use(routes) //Para utilizar as rotas

app.listen(3000) //Porta que sera usada na aplicação



// (async () => {
//     const Planet = require("../models/Planet") //Essa estrutura que sera usada para inserir os dados

//     // const newPlanet = await Planet.create({ //Com isso, estou enviando esses dados para o BD, depois é só executar o comando node index
//     //     name: "World",
//     //     position: 5
//     // })

//     // const seePlanets = await Planet.findAll({
//     //     where: { //Essa é outra forma de filtrar a consulta
//     //         name: "World"
//     //     }
//     // }) //Usando apenas o findAll será mostrado todos os valores q esta no DataBase, usando o findByPk(chave) junto com o id q esta no banco, sera mostrado apenas aquele valor

//     // const updatePlanet = await Planet.findByPk(1); //Estou buscando o valor q quero atualizar
//     // updatePlanet.name = "Muarte" //Estou inserindo o novo valor
//     // await updatePlanet.save() //Esta  atualizando as atualizações

//     const deletePlanet = await Planet.findByPk(2) //Estou buscando o dado q quero apagar
//     await deletePlanet.destroy() //Estou deletando o dado
// })();