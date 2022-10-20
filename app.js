const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
require('dotenv').config();

// Parsing middleware
app.use(express.urlencoded({ extended: true })); 

// Parse application/json
app.use(express.json()); 

// Static Files
app.use(express.static('public'));

// Templating Engine
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(5000, () => {
    console.log('server connected at port 5000');
});