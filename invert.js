let invertedTestObject = {}

let invert = (testObject) => {
   for (let objectKey of Object.keys(testObject)) {
        invertedTestObject[testObject[objectKey]] = objectKey
   }
   return invertedTestObject
}


module.exports = invert
