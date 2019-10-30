const express = require('express')
// const router = express.Router()
const routes = require('./routes')

const app = express()

app.use(routes);

app.listen(3000, () => {
    console.log('Counter-Stats Go server started on port 3000')
})
