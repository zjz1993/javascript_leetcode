/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    A.forEach((item) => {
        return item.reverse()
    })
    const arr = A.map((item) => {
        return item.map((subItem) => {
            if (subItem === 0) {
                subItem = 1;
            } else if (subItem === 1) {
                subItem = 0;
            }
            return subItem;
        })
    })
    return arr;
};