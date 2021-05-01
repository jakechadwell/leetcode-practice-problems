<<<<<<< HEAD
"use strict";
// Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.
// countPosi([-2, 7, 4, -9, 1]) //3
// countPosi([3, 6, 9, -1]) //3
// countPosi([10]) //1
function countPosi(x) {
    var count = 0
    for ( var i = 0 ; i<x.length ; i++ ) {
        if (x[i]>0) {
            count++
        }
    } return count
};

// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}

function convertAddressToObject(string){
    var array = string.split(" ");
    var address = {};
    address.streetNumber = array[0];
    address.streetName = array[1] +" " + array[2];
    console.log(address);
  };

/**
 * 28.Implement strStr()
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

/**
 * 
 * 
 */
=======
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
>>>>>>> e1e6d9df5343bcd4ef96d951de8fd6ecd9c55d89
