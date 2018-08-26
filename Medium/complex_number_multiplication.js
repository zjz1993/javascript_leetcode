/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    const splitComplex = (str) => {
        let array = [];
        array[0] = str.split('+')[0];
        const complexPart = str.split('+')[1];
        array[1] = complexPart.slice(0,complexPart.length - 1);
        return array;
    }
    let complexA = splitComplex(a);
    let complexB = splitComplex(b);
    const numPart = complexA[0]*complexB[0]-complexA[1]*complexB[1];
    const complexPart = complexA[1]*complexB[0]+complexB[1]*complexA[0];
    return numPart.toString() + '+' + complexPart + 'i';
};