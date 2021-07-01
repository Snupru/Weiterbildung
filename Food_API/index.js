"use strict"

const {search, productInfo} = require("./api/productApi");

search("cheese").then(function(o){
   // console.log(o);
});

productInfo(1103344).then(function(p){
    console.log(p);
});