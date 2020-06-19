const express = require('express');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
// const flash = require('connect-flash');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }));

// // Connect flash
// app.use(flash());

// // Global vars
// app.use((req, res, next) => {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
// });

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));