/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result=[];
    for(let i=left;i<=right;i++){
        let isResultFlag=true
        const numberStr = (i+'').split('');
        for(let j=0;j<numberStr.length;j++){
            if(i%numberStr[j]!=0){
                isResultFlag=false;
            }
        }
        if(isResultFlag){
            result.push(i);
        }
    }
    return result;
};