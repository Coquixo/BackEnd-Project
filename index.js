const express = require('express');
const app = express();
const db = require('./db/db')
const router = require('./router')
require('./models/associations')

const PORT = 3000;

//MiddleWares:

app.use(express.json());
app.use(router)


app.listen(PORT, () => {

    console.log(`Server oppened at port ${PORT}`);

    db.authenticate()
        .then(() => {
            console.log('Connected to the database');
        })
        .catch(() => { console.log('Not connected to the database') })
});