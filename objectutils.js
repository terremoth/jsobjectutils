Object.prototype.renameKey = function(oldName, newName) {
     if (oldName == newName) {
         return this;
     }
    
    if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
    }
    
    return this;
};

function objSize(obj) {
	return Object.keys(obj).length;
}

function objEmpty(obj) {
    return objSize(obj) === 0;
}

function objFunctions(obj) {
    Object.getOwnPropertyNames(obj).filter(function (p) {
        return typeof obj[p] === 'function';
    });
}

function objToParams(obj){
  return "?" + Object
        .keys(obj)
        .map(function(key){
          return key+"="+obj[key];
        })
        .join("&");
}
