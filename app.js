
const path = require('path');

const express = require('express');

// const resData = require('./util/restaurant-data');  
// not used after using routes
const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));  // middle-ware

app.use('/', defaultRoutes);

app.use('/', restaurantRoutes);





app.use(function (req, res) {
  res.status(404).render('404');
});  // handle all 404 pages 

app.use(function (error, req, res, next) {
  res.status(500).render('500');
}); // error handling requires 4 params 


app.listen(3000);
