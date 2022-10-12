function mapObject(obj, callback){
        let newObj={}
        for (let key of Object.keys(obj)){
            newObj =  callback(key, obj[key])
        }
        return newObj
}

module.exports = mapObject