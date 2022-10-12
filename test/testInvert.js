let invert = require('../invert')
let testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }

let invertedTestObject = invert(testObject)
console.log(invertedTestObject)
