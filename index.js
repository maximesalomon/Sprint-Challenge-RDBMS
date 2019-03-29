const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const db = require('./data/dbHelpers');

const server = express();

server.use(helmet());
server.use(express.json());


const PORT = process.env.PORT || 7000;
server.listen(PORT, () => console.log(`\nServer is running on port:${PORT}\n`));