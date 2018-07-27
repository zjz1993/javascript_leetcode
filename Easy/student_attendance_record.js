/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let arr1 = s.match(/[A]/g);
    let arr2 = s.match(/L+/g);
    return check(arr1,'A') && check(arr2, 'L');
};
function check(array, type) {
    if (type === 'A') {
        if (!array) {
            return true
        } else {
            return array.length <= 1;
        }
    } else if (type === 'L') {
        if (!array) {
            return true;
        } else {
            let flag = false;
            array.forEach((item) => {
                if (item.length > 2) {
                    flag = true;
                }
            })
            if (flag) {
                return false;
            } else {
                return true;   
            }
        }
    }
}