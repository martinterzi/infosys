const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const conDb = require('../database/db');
const promisify = require('util');
const { query } = require('express');

//metodo para registrar
exports.register =  (req, res) => {
    try {
        const name = req.body.name;
        const user = req.body.user;
        const pass = req.body.pass;
       // let passHash = await bcryptjs.hash(pass, 8);
        console.log(name + user + pass);
      //  console.log(passHash);
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
        console.log(name);
        console.log(dni);
        
        conDb.query('INSERT INTO choferes SET ?', {nombre: name, dni: dni }, (err, result) => {
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
        console.log(patente);
        console.log(modelo);
        
        conDb.query('INSERT INTO unidades SET ?', {patente: patente, modelo: modelo }, (err, result) => {
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
        
        conDb.query('SELECT * FROM choferes WHERE nombre = ?',[req.body.name], (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                 res.render('searchind', {chof:results[0]});
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
        conDb.query('SELECT * FROM unidades WHERE patente = ?',[req.body.unid], (error, results) => {
            if (error){
                throw error;
            } else{
                console.log(results)
                console.log(results[0])
                 res.render('searchindU', {unid:results[0]});
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
        console.log(patente);
        console.log(modelo);
        
        conDb.query('UPDATE unidades SET ? WHERE id = ?', [{patente: patente, modelo: modelo}, id], (err, result) => {
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
        console.log(nombre);
        console.log(dni);
        
        conDb.query('UPDATE choferes SET ? WHERE id = ?', [{nombre: nombre, dni: dni}, id], (err, result) => {
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