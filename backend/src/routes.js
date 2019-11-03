const express = require('express')
const apiID = require('steamapi')
const api = require('steam-js-api')

const routes = express.Router()

const steam = new apiID('A897E04835D9E1F7B63F373919191882')

api.setKey('A897E04835D9E1F7B63F373919191882')

const APP_ID = 730 // We only want to check for one game

// With a callback
const findUser = async (username) => {
    try {
        const userId = await findUserId(username)
        const user = await api.getStats(userId, APP_ID)
    
        return user
    } catch (error) {
        console.log(error)
    }
}

const findUserId = async (username) => {
    try {
        const link = 'https://steamcommunity.com/id/'
        const userLink = link + username
    
        const id = await steam.resolve(userLink)
    
        return id
    } catch (error) {
        console.log("Cant find user id: " + error.message)
    }
}

routes.get("/profile/:name", async (req, res) => {
    const user = await findUser(req.params.name)

    return res.json(user.data)
})

module.exports = routes;