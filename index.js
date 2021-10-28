const express = require('express');
const config = require('config');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const configDB = require('./Config/db');
const account = require('./Routes/account');

const app = express();
const PORT = config.get('PORT') || 8000;

app.use(passport.initialize());
app.use(passport.session());

require('./Config/passport')(passport);

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'Public')))

mongoose.connect(configDB.db, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log("Connection was successfully")
})

mongoose.connection.on('error', (err) => {
    console.log(`unconnected DB:${err}`)
})

app.use('/account',account);

app.get('/', (req, res) => {
    res.send('Serve is worked')
})

app.listen(PORT, () => {
    console.log(`Serve has been started on ${PORT}:PORT...`)
})