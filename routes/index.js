
const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


//routes
//index route
router.get('/', (req, res) => {
  res.render('index');
});


//about route
router.get('/about', (req, res) => {
  res.render('about');
})

//projects Page
router.get('/project', (req, res) => {
  res.render('project');
})


module.exports = router;
