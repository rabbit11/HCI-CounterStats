const express = require('express')
const apiID = require('steamapi')
const api = require('steam-js-api')
const bodyParser = require('body-parser')

const routes = express.Router()

routes.use(bodyParser.json())

const steam = new apiID('A897E04835D9E1F7B63F373919191882')

api.setKey('A897E04835D9E1F7B63F373919191882')

let steamID = '' // My Steam ID, feel free to use it for testing :)
const appID = 730 // We only want to check for one game
const moreInfo = true // Provide more info (name, links)

// With a callback
const findUser = (steamID) => {
    api.getStats(steamID, 730).then(result => {
        console.log(result.data)
        console.log(result.data.stats.gun.awp)
        // apiResult = result
    
        return result
    }).catch(console.error)
}

const findUserId = (username) => {
    const link = 'https://steamcommunity.com/id/'
    // const userLink = link.concat(username)
    const userLink = link + username

    let id = ''
    steam.resolve(userLink).then(steamID, id => {
        console.log('O id de ' + username + ' e: ' + id); // 76561198146931523
        
        id = steamID

        console.log(id + ' meajuda')

        return steamID
    });
    // console.log(id + ' helpa')
    // return id
}

routes.get('/teste', (req,res) => {
    console.log('deu bom!!!!')

})

routes.get("/profile/:name", (req, res) => {
    const userId = findUserId(req.params.name)

    const userProfile = findUser(userId)

    if (userId != '76561198146931523') {
        console.log(userId)
    }
    
    console.log(userProfile)

    res.json(userProfile)
})

module.exports = routes;