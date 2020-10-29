//Require necessary dependancies
const express = require('express');
const app = express();

const mainRoutes = require('./routes');


//static route to serve static files in public folder
app.use('/static', express.static('public'));

//middleware view engine to pug
app.set('view engine', 'pug');

app.use(mainRoutes);

//error handler 404 handler to catch undefined or nonexistent route requests
app.use((req, res, next) => {
  console.log('404 error handler called');
  const err = new Error();
  err.status = 404;
  err.message = `This page does not exist!`
  console.log(err.status);
  console.log(err.message);
  next(err);
});

app.use((err, req, res, next) => {
  console.log('Global error handler called');
  if (err.status === 404) {
    res.render('error', {err})
  } else {
    err.message = err.message || `Houston we have a problem!`;
    res.status(err.status || 500);
    res.render('error', {err});
  }
});

//event listener set to start server on port 3000
app.listen(3000, () => {
  console.log('This application is running on localhost:3000!')
});
