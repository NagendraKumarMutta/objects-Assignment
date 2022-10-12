let newObject = {}

let defaults = (testObject, defaultObject) => {

    for (let objectKey of Object.keys(testObject)) {
        if (testObject[objectKey] === undefined) {
            testObject[objectKey] = defaultObject[objectKey]
        }
   }
    newObject = testObject
    return newObject
}

module.exports = defaults
