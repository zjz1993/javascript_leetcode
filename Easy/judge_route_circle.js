/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x=0;
    let y=0;
    for(let i=0;i<moves.length;i++){
        switch(moves[i]) {
            case 'U':y++;break;
            case 'D':y--;break;
            case 'L':x++;break;
            case 'R':x--;break;
        }
    }
    if (x === 0 && y === 0) {
        return true;
    } else {
        return false;
    }
};