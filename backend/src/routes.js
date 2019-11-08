const express = require('express')
const apiID = require('steamapi')
const api = require('steam-js-api')

const routes = express.Router()

const steam = new apiID('A897E04835D9E1F7B63F373919191882')

api.setKey('A897E04835D9E1F7B63F373919191882')

const APP_ID = 730 // We only want to check for one game

// With a callback
const findUser = async (userId) => {
    try {
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

const findUserProfile = async (userId) => {
    try {
        const playerSummary = await steam.getUserSummary(userId)

        // console.log(playerSummary)

        const userProfile = {
            username: playerSummary.nickname,
            photourl: playerSummary.avatar.large
        }

        // console.log(userProfile)

        return userProfile
    } catch (error) {
        console.log("Cant find user's profile")
    }
}

routes.get("/profile/:name", async (req, res) => {
    const userId = await findUserId(req.params.name)
    const user = await findUser(userId)
    const userProfile = await findUserProfile(userId)

    return res.json({
        user: user.data,
        userProfile: userProfile
    })
})

module.exports = routes;