const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 4000;

//motor de plantilla
app.set('view engine', 'ejs');
app.set('views',__dirname+ '/views');

// set carpeta publica
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//set variantes entorno
dotenv.config({path:'./env/.env'});

//cookies
app.use(cookieParser());


//llamar router
app.use('/', require('./routes/router'));

//salir
app.get('/logout', (req, res) => {
    req.session.destroy(()=>{
    res.redirect('/');
    })
});


app.listen(port, () => {
    console.log(`Server started on port`);
});