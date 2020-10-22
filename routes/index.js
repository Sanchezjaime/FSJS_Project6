
const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


//routes
//index route
router.get('/', (req, res) => {
  //Passes projects data to index template
  res.render('index', { projects });
});

//projects Page
router.get('/project/:id', (req, res) => {
  let projectId = req.params.id;
  let project = projects.find( ({ id }) => id === parseInt(projectId) );
  console.log(project);
  console.log(project.technologies);
  if (project) {
    res.render('project', { project });
  } else {
    console.log('something is wrong');
    res.sendStatus(404);
  }
});


//about route
router.get('/about', (req, res) => {
  res.render('about');
})

//export module
module.exports = router;
