
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
router.get('/project/:id', (req, res, next) => {
  let projectId = req.params.id;
  let project = projects.find( ({ id }) => id === parseInt(projectId) );
  console.log(project);
  if (project) {
    res.render('project', { project });
  } else {
    const err = new Error();
    err.status = 404;
    err.message = 'That project does not exist!'
    next(err);
  }
});


//about route
router.get('/about', (req, res) => {
  res.render('about');
})

//export module
module.exports = router;
