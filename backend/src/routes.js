const express = require('express')
const apiID = require('steamapi')
const api = require('steam-js-api')

const routes = express.Router()

const steam = new apiID('A897E04835D9E1F7B63F373919191882')

api.setKey('A897E04835D9E1F7B63F373919191882')

let steamID = '' // My Steam ID, feel free to use it for testing :)
const appID = 730 // We only want to check for one game
const moreInfo = true // Provide more info (name, links)

// With a callback
const findUser = async (steamID) => {

    const user = await api.getStats(steamID, 730)

    return user
}

const findUserId = async (username) => {
    const link = 'https://steamcommunity.com/id/'
    const userLink = link + username

    const id = await steam.resolve(userLink)

    return id
}

routes.get('/teste', (req, res) => {
    console.log('deu bom!!!!')

})

routes.get("/profile/:name", async (req, res) => {
    const userId = await findUserId(req.params.name)
    const user = await findUser(userId)

    return res.json({ user: user })
})

module.exports = routes;