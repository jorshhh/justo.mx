'use strict';

module.exports = function(app) {

    let checkoutController = require('../controllers/checkoutController');

    app.route('/')
        .get(checkoutController.helloworld)

    app.route('/checkout')
        .post(checkoutController.checkout)

};
