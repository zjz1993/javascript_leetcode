/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = [];
    ops.forEach((item) => {
      if (item !== 'C' && item !== 'D' && item !== '+'){
        stack.push(parseInt(item, 10));
      } else {
        let index = stack.length - 1;
        switch(item){
          case '+':
                  stack.push(stack[index]+stack[index-1])
                  break;
          case 'D':
                  stack.push(stack[index]*2);        
                  break;
          case 'C':
                  stack.pop();
                  break;
        }
      }
    })
    return stack.reduce((arr, cur)=> {
      return arr+cur;
    });
};