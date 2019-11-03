const express = require('express')
const routes = require('./routes')

const cors = require('cors');

const app = express();

app.use(cors());
app.use(routes);

app.listen(8080, () => {
    console.log('Counter-Stats Go server started on port 8080')
})
