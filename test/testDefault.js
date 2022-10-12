let defaults = require('../default')

let testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', country: undefined, code: undefined }

let defaultObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', country: "India", code: +91  }

let objectAfterApplyingDefaults = defaults(testObject,defaultObject)

console.log(objectAfterApplyingDefaults)
