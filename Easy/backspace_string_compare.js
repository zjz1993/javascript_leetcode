/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
 // 用数组来模拟栈结果，用栈来模拟对字符串的删除功能
var backspaceCompare = function(S, T) {
    let stack1 = [];
    let stack2 = [];
    return pushToStack(S,stack1).join('') === pushToStack(T,stack2).join('');
};
function pushToStack(string,array){
    for(let i=0;i<string.length;i++){
        if (string[i]!== '#'){
            array.push(string[i])
        } else {
            array.pop();
        }
    }
    return array;
}