const express = require('express')
const routes = express.Router()
const apiID = require('steamapi')
const api = require('steam-js-api')

let apiResult;

const steam = new apiID('A897E04835D9E1F7B63F373919191882')

api.setKey('A897E04835D9E1F7B63F373919191882')

steamID = '76561198056485411' // My Steam ID, feel free to use it for testing :)
appID = 730 // We only want to check for one game
moreInfo = true // Provide more info (name, links)

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
    const userLink = link.concat(username)

    steam.resolve(userLink).then(id => {
        console.log(id); // 76561198146931523
        // steamID = id

        return id
    });
}


routes.get("/profile/:name", (req, res) => {
    const userId = findUserId(req.params.name)

    const userProfile = findUser(userId)
    
    console.log(userProfile)

    res.render("/profile/:name/show", { userProfile: userProfile })
})

module.exports = routes;