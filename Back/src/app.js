const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');

const app = express()

app.set('port', process.env.PORT || 4000);


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(require('./routes/Users.routes'))
app.use(require('./routes/Oportunidades.routes'))
app.use(require('./routes/Company.routes'))

module.exports = app;


