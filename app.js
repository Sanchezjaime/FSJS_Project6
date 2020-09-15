const express = require('express');
//const data = require('data.json');

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

//routes
//index route
app.get('/', (req, res) => {
  res.render('index', {data.projects});
});
//about route
app.get('/about', (req, res) => {
  res.render('about');
})
//dynamic projects route
app.get('/project/:id', (req, res) => {
  res.render('project');
})

//event listener set to start server on port 3000
app.listen(3000, () => {
  console.log('This application is running on localhost:3000!')
});
