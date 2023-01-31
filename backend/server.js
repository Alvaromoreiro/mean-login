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
const cors = require('cors');

// If you want to use cors with whitelist
// const whitelist = ['http://localhost:4200', 'http://localhost:3000'];
// app.use(cors({origin: whitelist}));

// Allow all origins
app.use(cors());

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/api', router);
authRoutes(app);
app.get('/', (req, res) => {res.send('Hello World!')});

app.listen(properties.PORT, () => console.log(`Server listen on port: ${properties.PORT}`))