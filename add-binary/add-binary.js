/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carryBit = 0;
    let result = '';
    let diff = Math.abs(a.length - b.length);
    
    if (a.length > b.length) {
        for (let i = 0; i < diff; i++) {
            b = '0' + b;
        }
    }
    if (b.length > a.length) {
        for (let i = 0; i < diff; i++) {
            a = '0' + a;
        }
    }

    for (let i = a.length - 1; i >= 0; i--) {
        if (carryBit === 1) {
            if (a[i] ==='1' && b[i] === '1') {
                result = '1' + result;
            } else if (a[i] === '0' && b[i] === '0') {
                result = '1' + result;
                carryBit = 0;
            } else {
                result = '0' + result;
                carryBit = 1;
            }
        } else {
            if (a[i] === '1' && b[i] === '1') {
                result = '0' + result;
                carryBit = 1;
            } else if (a[i] === '0' && b[i] === '0') {
                result = '0' + result;
            } else {
                result = '1' + result;
            }
        }
    }
    if (carryBit === 1) {
        result = '1' + result;
    }
    return result;
};