const express = require('express');
const app = express();
const port = 3000;
const homeRoutes = require('./routes/homeRoutes')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public')) 

app.use(homeRoutes)

app.listen(port, () => {console.log('listening on port: ' + port)})