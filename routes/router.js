const express = require('express');
const router = express.Router();
const conexion = require('../database/db');
const verificacion = express.Router();
const nodemailer = require('nodemailer');

const authController = require('../controllers/authController');
const { text } = require('express');

verificacion.use((req, res, next)=>{
    let token= req.headers['x-access-token']|| req.headers['authorization'];
    console.log(token);
})



router.get('/', (req, res) => {
    
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/addChofer', (req, res) => {
    res.render('addChofer');
});
router.get('/addUnidad',(req, res) => {
    res.render('addUnidad');
});

router.get('/consultas', (req, res) => {
    
    res.render('consultas');
});

router.post('/email', (req, res) => {
    const {name, email, cel, mensaje}= req.body;
    contentHTML =`
    <h1>user information</h1>
    <ul>
        <li> Username: ${name}</li>
        <li>User email: ${email}</li>
        <li>Celular: ${cel}</li>
    </ul>
    <p>${mensaje}</p>
    `;
    const transporte = nodemailer.createTransport({
        host:'smtp-mail.outlook.com',
        port:'587',
        secure:'false',
        auth:{
            user:'acquatransfal@hotmail.com.ar',
            pass:'Cris2020'
        }
    });
    var mailOptions={
      from:'acquatransfal@hotmail.com.ar',
      to:'acquatransfal@hotmail.com.ar',
      subject:"nn",
      text:`${mensaje}`
    };
    transporte.sendMail(mailOptions, (error, info)=>{
        if (error) {
            res.status(500).send(error.message);
        }
        else{
            console.log('enviado con exito');
            res.status(200).json(req.body);
        }
    })
});


//ruta de metodos 

router.post('/register', authController.register);
router.post('/addChofer', authController.addChofer);
router.post('/addUnidad', authController.addUnidad);
router.post('/login', authController.login);
router.get('/searchResult', authController.buscar);
router.get('/searchResultU', authController.buscarU);
router.post('/searchind', authController.buscarInd);
router.get('/choferMas/:id', authController.choferMas);
router.get('/unidadMas/:id', authController.unidadMas);
router.post('/searchindU', authController.buscarIndU);
router.get('/choferEdit/:id', authController.choferEdit);
router.get('/unidadEdit/:id', authController.unidadEdit);
router.post('/actualizarUnidad', authController.actualizarUnidad);
router.post('/actualizarChofer', authController.actualizarChofer);
router.get('/unidadEliminar/:id', authController.unidadEliminar);
router.get('/choferEliminar/:id', authController.choferEliminar);

/* GET home page. */
module.exports= router;