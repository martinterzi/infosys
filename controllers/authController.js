const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer');
const conDb = require('../database/db');
const promisify = require('util');
const { query } = require('express');
const { text } = require('express');

//metodo para registrar
exports.register =  (req, res) => {
    try {
        const name = req.body.name;
        const user = req.body.user;
        const pass = req.body.pass;
      //  let passHash = await bcryptjs.hash(pass, 8);
        console.log(name + user + pass);
       // console.log(passHash);
        conDb.query('INSERT INTO users SET ?', { user: user, name: name, pass: pass }, (err, result) => {
            // si hay error al ingresar user muestra en consola, sino redirecciona a index
            if (err) {
                console.log(pass);
            }
            res.redirect('/');
        })
    } catch (error) {
        console.log(error);
    }

};

exports.addChofer =  (req, res) => {
    try {
        const name = req.body.name;
        const dni = req.body.dni;
        const vtolic = req.body.vtolic;
        const vtopsico = req.body.vtopsico;
        const vtopel = req.body.vtopel;
        const nt = req.body.nt;
        const fdni = req.body.fdni;
        const fn = req.body.fn;
        const domicilio = req.body.domicilio;
        const vtog = req.body.vtog;
        const cuil = req.body.cuil;
        
        
        
        conDb.query('INSERT INTO choferes SET ?', {nombre: name, dni: dni, vtolic: vtolic, vtopsico: vtopsico, 
            vtopel: vtopel, nt:nt, fdni:fdni, fn:fn, domicilio:domicilio, vtog:vtog, cuil:cuil }, (err, result) => {
            // si hay error al ingresar user muestra en consola, sino redirecciona a index
            if (err) {
                console.log(err);
            }
            console.log('exito')
            res.redirect('/addChofer');
        })
    } catch (error) {
        console.log(error);
    }

};
exports.addUnidad =  (req, res) => {
    try {
        const patente = req.body.patente;
        const modelo = req.body.modelo;
        const chasis = req.body.chasis;
        const motor = req.body.motor;
        const segurovto = req.body.segurovto;
        const seguropol = req.body.seguropol;
        const ruta = req.body.ruta;
        const rto = req.body.rto;
        const mas = req.body.mas;
        const ve = req.body.ve;
        const spot = req.body.spot;
        const service = req.body.service;
        conDb.query('INSERT INTO unidades SET ?', {patente: patente, modelo: modelo, chasis: chasis, 
            motor:motor, segurovto:segurovto, seguropol:seguropol, ruta:ruta, rto:rto, 
            mas:mas, spot:spot, ve:ve, service:service}, (err, result) => {
        
            // si hay error al ingresar user muestra en consola, sino redirecciona a index
            if (err) {
                console.log(err);
            }
            console.log('exito')
            res.redirect('/addUnidad');
        })
    } catch (error) {
        console.log(error);
    }

};

exports.login =  (req, res) => {
    try {
        const user = req.body.user;
        const pass = req.body.pass;

        conDb.query('SELECT * FROM users WHERE user = ?', [user],  (error, results) => {
            if (results.length == 0 ) {
                console.log('pass incorrecto')
            } else {
                console.log('pass ok')
                /*const payload = {
                    check: true
                }
                const token = jwt.sign(payload, 'process.env.JWT_SECRETO',{
                    expiresIn:'7d'
                });*/
                //console.log(token);
              
                res.render('index');
            }
        })
    } catch (error) {
        console.log(error);
    }



};


exports.buscar =  (req, res) => {
    conDb.query('SELECT * FROM choferes', (error, results) => {
        if (error){
            throw error;
        } else{
             res.render('searchResult', {results:results});
        }       
    })
};

exports.buscarU =  (req, res) => {
    conDb.query('SELECT * FROM unidades', (error, results) => {
        if (error){
            throw error;
        } else{
             res.render('searchResultU', {results:results});
        }       
    })
};

exports.buscarInd =  (req, res) => {
    try {
        //conDb.query('SELECT * FROM choferes WHERE nombre LIKE = ?',[req.body.name]
        conDb.query("SELECT * FROM choferes WHERE nombre LIKE " + conDb.escape('%'+req.body.name+'%'), (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                if(results.length>0){
                    res.render('searchind', {results:results});
                } else{
                    res.redirect('/');
                }
                
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.buscarIndU =  (req, res) => {
    try {
        const pat = req.body.unid;
        console.log(pat)
        conDb.query("SELECT * FROM unidades WHERE patente LIKE " + conDb.escape('%'+req.body.unid+'%'), (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                 res.render('searchindU', {results:results});
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.choferEdit =  (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        conDb.query('SELECT * FROM choferes WHERE id = ?',[id], (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                 res.render('choferEdit', {chofer:results[0]});
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.unidadEdit =  (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        conDb.query('SELECT * FROM unidades WHERE id = ?',[id], (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                 res.render('unidadEdit', {unid:results[0]});
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.actualizarUnidad =  (req, res) => {
    try {
        const id = req.body.id;
        const patente = req.body.patente;
        const modelo = req.body.modelo;
        const chasis = req.body.chasis;
        const motor = req.body.motor;
        const segurovto = req.body.segurovto;
        const seguropol = req.body.seguropol;
        const ruta = req.body.ruta;
        const rto = req.body.rto;
        const mas = req.body.mas;
        const spot = req.body.spot;
        const ve = req.body.ve;
        const service = req.body.service;
        conDb.query('UPDATE unidades SET ? WHERE id = ?', [{patente: patente, modelo: modelo, chasis: chasis, 
            motor:motor, segurovto:segurovto, seguropol:seguropol, ruta:ruta, rto:rto, 
            mas:mas, spot:spot, service:service, ve:ve}, id], (err, result) => {
            // si hay error al ingresar user muestra en consola, sino redirecciona a index
            if (err) {
                console.log(err);
            }
            console.log('exito')
            res.redirect('/');
        })
    } catch (error) {
        console.log(error);
    }

};

exports.actualizarChofer =  (req, res) => {
    try {
        const id = req.body.id;
        const nombre = req.body.name;
        const dni = req.body.dni;
        const vtolic = req.body.vtolic;
        const vtopsico = req.body.vtopsico;
        const vtopel = req.body.vtopel; 
        const nt = req.body.nt;
        const fdni = req.body.fdni;
        const fn = req.body.fn;
        const domicilio = req.body.domicilio;
        const vtog = req.body.vtog;
        const cuil = req.body.cuil;
        
        conDb.query('UPDATE choferes SET ? WHERE id = ?', [{nombre: nombre, dni: dni, vtolic: vtolic, vtopsico: vtopsico, 
            vtopel: vtopel, nt:nt, fdni:fdni, fn:fn, domicilio:domicilio, vtog:vtog, cuil:cuil}, id], (err, result) => {
            // si hay error al ingresar user muestra en consola, sino redirecciona a index
            if (err) {
                console.log(err);
            }
            console.log('exito')
            res.redirect('/');
        })
    } catch (error) {
        console.log(error);
    }

};

exports.unidadEliminar =  (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        conDb.query('DELETE FROM unidades WHERE id = ?',[id], (error, results) => {
            if (error){
                throw error;
            } else{
                
                 res.redirect('/');
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.choferEliminar =  (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        conDb.query('DELETE FROM choferes WHERE id = ?',[id], (error, results) => {
            if (error){
                throw error;
            } else{
                
                 res.redirect('/');
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.choferMas =  (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        conDb.query('SELECT * FROM choferes WHERE id = ?',[id], (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                 res.render('choferMas', {chofer:results[0]});
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.unidadMas =  (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        conDb.query('SELECT * FROM unidades WHERE id = ?',[id], (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                 res.render('unidadMas', {unid:results[0]});
            }       
        })
    } catch (error) {
        console.log(error)
    }
   
 
};

exports.enviarEmail =  (req, res) => {
        var check = true;
        const { name, email, cel, mensaje } = req.body;
        contentHTML = `
        <h1>user information</h1>
        <ul>
            <li> Username: ${name}</li>
            <li>User email: ${email}</li>
            <li>Celular: ${cel}</li>
        </ul>
        <p>${mensaje}</p>
        `;
        var transporte = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            post: 587,
            secure: false,
            auth: {
                user: "selena.johnson12@ethereal.email",
                pass: "UtSPGdAKegqzW8n7Cw"
            }
        });
        var mailOptions = {
            from: `${email}`,
            to: "selena.johnson12@ethereal.email", 
            subject: "CONSULTA",
            text: `${mensaje}`
        };
        transporte.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
                check= false;
            }
            else {
                console.log('enviado con exito');
                check=true;
                console.log(req.body.name);
               // res.status(200).json(req.body);
                
            }
        })
        if (check) {
            res.render('emailEnviado', {name:req.body.name});
        }
    
   
 
};


/*
exports.checkAutenticacion = async (req, res, next) =>{

    if(req.cookiesOptions.jwt){
       try {
           const decodificada = await promisify(jwt.verify)(req.cookiesOptions.jwt, process.env.JWT_SECRETO)
           conDb.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results)=>{
               if (!results) {
                   return next()}
                   req.user= results[0]
                   return next()
           })
       } catch (error){
           console.log(error)
           return next()
       }
    } else{
         res.redirect('/login')
         next()
    }

}*/