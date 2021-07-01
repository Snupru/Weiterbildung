"use strict"

const axios = require("axios");
const key = "OiY5eA8lFYkitEI9qpij62LvIUMT9c9M1fqQbR91";

module.exports.search = function searchProduct(name){
   return axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params:{
            api_key: key,
            query: name
        }
    })
    .then((response) => response.data['foods']);
}

module.exports.productInfo = function productInfo(fdcId){
    return axios.get("https://api.nal.usda.gov/fdc/v1/food/" + fdcId, {
         params:{
             api_key: key
         }
     })
     .then((response) => response.data);
 }