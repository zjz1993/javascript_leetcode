/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var arr = [];
    var temp = [];
    var m = A.length
    var n = A[0].length
    for (var i = 0;i<n;i++) {
        temp = []
        for (var j = 0;j<m;j++) {
          temp.push(A[j][i]);
        }
        arr.push(temp);
    }
    return arr;
};