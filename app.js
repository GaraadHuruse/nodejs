const _ = import('lodash');
const arrOfArr = [1, [2, [3, [4]]]]
console.log( _.flattenDeep(arrOfArr))