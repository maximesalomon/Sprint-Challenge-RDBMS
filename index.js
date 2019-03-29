const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const db = require('./data/dbHelpers');

const server = express();

server.use(helmet());
server.use(express.json());

//POST /api/projects

server.post('/api/projects', async (req, res) => {
    db.addProject(req.body)
        .then(project => {
          res.status(201).json(project);
        })
    .catch(err => res.status(500).json(err));
  });


const PORT = process.env.PORT || 7000;
server.listen(PORT, () => console.log(`\nServer is running on port:${PORT}\n`));