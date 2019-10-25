const express = require('express')
const router = express.Router()
const routes = require('./routes')

router.use(routes);

router.listen(3000, () => {
    console.log('Counter-Stats Go server started')
})