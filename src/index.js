
exports.min = function min (array) {
  if (array == '' || array === [] || array[0] == undefined || array.length == 0 ){
     return 0;
  }  
  let answer = array.sort( (a, b) => a - b );
 return answer[0];
  }
 


exports.max = function max (array) {
  if (array === '' || array === ' ')  {
    return 0;
 }
 let answer = array.sort( (a, b) => a - b );
 return answer[array.length - 1];
  }



exports.avg = function avg (array) {
  if (array === '' || array === ' ')  {
    return 0;
 }
 let sum = 0;
 for ( let i = 0; i < array.length; i++ ) {
   sum+= array[i];
 }
 return sum / array.length;
}
