'use strict';

// Función de prueba para ver que el servidor esté funcionando
exports.helloworld = function(req, res) {

    res.json(
        {"hello": "world"}
    );

};


// Función que se encargará de procesar el cobro según las reglas
// También definimos las reglas aquí, aunque en producción deberían salir de una base de datos
exports.checkout = function(req,res){

    let rules = [

        {
            "product":"TSHIRT",
            "price":20,
            "promotion":
                {
                    "kind":"wholesale",
                    "price":19,
                    "minimum":3
                }
            
        },
        {
            "product":"VOUCHER",
            "price":5,
            "promotion":
                {
                    "kind":"2for1"
                }
            
        },
        {
            "product":"MUG",
            "price":7.5
        }

    ];

    // Creamos una nueva instacia del modelo con las reglas
    const CheckoutModel = require('../models/checkoutModel');
    let checkoutModel = new CheckoutModel(rules);

    // procesamos el request y regresamos la cuenta
    let response = checkoutModel.getTotal(req.body.products);

    res.send(response);    

};