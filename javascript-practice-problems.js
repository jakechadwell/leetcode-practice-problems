/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var stringSplit = s.split(" ");
    var splitLength = (stringSplit.length)-1
    if (s.length >= 1){
        return stringSplit[splitLength].length
    }else{
        return 0
    }
};
console.log(lengthOfLastWord("a "));