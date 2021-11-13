const express = require('express');
const router = express.Router();
const conexion = require('../database/db');

const authController = require('../controllers/authController');




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





//ruta de metodos 

router.post('/register', authController.register);
router.post('/addChofer', cargar.single("archivo"), authController.addChofer);
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

var multer = require('multer');
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage(
    {
        destination:function(request, file, callback){
            callback(null, './public/images/');
        },
        filename:function(request, file, callback){
            console.log(file);
            callback(null, `${fecha}_${file.originalname}`);
        }
    }
);

var cargar = multer({storage:rutaAlmacen});
/* GET home page. */
module.exports= router;