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

//POST /api/actions
server.post('/api/actions', async (req, res) => {
    db.addAction(req.body)
        .then(action => {
          res.status(201).json(action);
        })
    .catch(err => res.status(500).json(err));
  });

// GET /api/projects/:id
server.get('/api/projects/:id', async (req, res) => {
    const id = req.params.id;
  db.getProjectByIdWithActions(id)
    .then(project => {
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'The specified project does not exist.' });
        }
    })
    .catch(err => console.log('error', err));
  });



const PORT = process.env.PORT || 7000;
server.listen(PORT, () => console.log(`\nServer is running on port:${PORT}\n`));