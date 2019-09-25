const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')

let app = express()
app.use(cors())
app.use(bodyParser.json())

let database = new Sequelize({
    dialect: 'sqlite',
    storage: './food.sqlite'
})

let Food = database.define('food', {
    title: Sequelize.STRING,
    place: Sequelize.STRING
})

finale.initialize({
    app: app,
    sequelize: database
})

let userResource = finale.resource({
    model: Food,
    endpoints: ['/food', '/food/:id']
})

database
    .sync({ force: true })
    .then(() => {
        app.listen(4002, () => {
            console.log('listening to port localhost:4002')
        })
    })