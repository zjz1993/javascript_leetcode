/*
   由zhaojunzhe于2019-04-04创建
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map((item) => Math.pow(item,2)).sort((a,b)=>a-b)
};
