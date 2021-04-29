const express = require('express');
const morgan = require('morgan');

const app = express();

// Settings
app.set('port', 3000 || process.env.PORT);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes (conenction dentro de routes)
app.use('/api/company/', require('./routes/employees.routes'));

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});






