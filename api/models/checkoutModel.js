'use strict';

// Initializing a class definition
class checkoutModel {

    constructor(rules) {

        //This should be consumed from a database

        this.prices = rules;
    }

    getTotal(products) {

        let productsArray = getIndividualProducts(products);
        let productsTotal = getTotalForProducts(productsArray, this.prices);

        return productsTotal;

    }

}

function getIndividualProducts(products){

    products = products.replace(/\s/g,'');  
    let array = products.split(',');

    let result = { };
    for(var i = 0; i < array.length; ++i) {
        if(!result[array[i]])
            result[array[i]] = 0;
        ++result[array[i]];
    }

    return result;
}

function getTotalForProducts(products, prices){


    let totals = [];
    let response = {};
    let total = 0;

    Object.keys(products).forEach(function(key) {

        let price = prices.find(products => products.product === key);

        let object = {
            "product":key,
            "quantity":products[key],     
            "total": processPromotion(price, products[key]) 
        };

        totals.push(object);

        total += object.total;

    });

    response.products = totals;
    response.total = total;


    return response;

}

function processPromotion(price, quantity){

    if(price.promotion == null){
        return price.price * quantity;
    }

    if(price.promotion.kind === "wholesale"){
        if(quantity >= price.promotion.minimum)
            return price.promotion.price * quantity;

        return price.price * quantity;
    }

    if(price.promotion.kind === "2for1"){

        let freeProduct = Math.floor(quantity/3);
        let paidQuantity = quantity - freeProduct;
        return price.price * paidQuantity;

    }

    return price.price * quantity;



}

module.exports = checkoutModel;
