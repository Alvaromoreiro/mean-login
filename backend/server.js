'use strict'
const express = require('express');
const authRoutes = require('./auth/auth.routes');
const properties = require('./config/properties');
const db = require('./config/db');
db();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

const app = express();
const router = express.Router();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/api', router);
authRoutes(app);
app.get('/', (req, res) => {res.send('Hello World!')});

app.listen(properties.PORT, () => console.log(`Server listen on port: ${properties.PORT}`))