// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
    
  
  if (typeof obj === "number") {
    return '' + obj;
  }

  if (obj === null) {
    return 'null';
  }

  if (obj === true) {
    return 'true';
  }
  if (obj === false) {
    return 'false';
  } 

  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
    var result = [];
    if (obj.length === 0) {
      return '[]'
    }
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]))
    }
  
    return "[" + result + "]";

  } else {
    var result = [];
    for (var key in obj) {
      if (obj[key] === undefined) {
        return '{}';
      }
      result.push('"' + key + '"' + ":" + stringifyJSON(obj[key]));
    }
    return "{" + result + "}";
  }
  

}
  // return result;
;
 
