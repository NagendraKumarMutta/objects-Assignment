const mapObject = require("../mapObject");

const obj = {start:5,middle:2, end:7}

function updateValues(key, value){
     obj[key] = value+5
     return obj
}

const result = mapObject(obj, updateValues)
console.log(result)