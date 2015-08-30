var key = require('utilise.key')

module.exports = function az(k) {
  return function(a, b){
    return (key(k)(a) | 0)  > (key(k)(b) | 0) ?  1 
         : (key(k)(a) | 0)  < (key(k)(b) | 0) ? -1 
                                              :  0
  }
}
