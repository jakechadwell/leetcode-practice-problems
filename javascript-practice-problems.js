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
}

// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}

function convertAddressToObject(string){
    var array = string.split(" ");
    var address = {};
    address.streetNumber = array[0];
    address.streetName = array[1] +" " + array[2];
    console.log(address);
  }

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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){
        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return List.next;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum)
{
    var bool=false;

    function countSum(root,newSum)
    {
        if(!root)
            return;
        newSum+=root.val;
        if(root.left==null && root.right==null)
        {
            if(sum==newSum)
            {
                bool=true;
            }
        }
        else
        {
            countSum(root.left,newSum);
            countSum(root.right,newSum);
        }
    }

    countSum(root,0);
    return bool;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x + "";
    return x.split("").reverse().join("")==x;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const neg = x < 0;
    const sign = neg ? '-' : '';
  
    const str = x.toString().split('').reverse().join('');
    const result = parseInt(`${sign}${str}`);
  
    if (result > 2147483647 || result < -2147483647) {
      return 0;
    }
  
    return result;
  };

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxprofit)
                maxprofit = profit;
        }
    }
    return maxprofit;
};

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let char;
    for(let i = 0; i<letters.length; i++){
        if(letters[i]>target){
            return letters[i];
        }
    }return letters[0];
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    while(nums[0]==nums[1]){
        nums.shift();
    }
    if(nums[0]<=nums[1]){
        for(let i = 0; i<nums.length-1; i++){
            if(!(nums[i]<=nums[i+1])){
                return false;
            }

        }
    }else if(nums[0]>=nums[1]){
        for(let i = 0; i<nums.length-1; i++){
            if(!(nums[i]>=nums[i+1])){
                return false;
            }

        }
    }
    return true;

};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var result = [];
    for(var i=0;i<nums.length;i++){
        for(var j=1;j<nums.length;j++ ){
            if(nums[i]+ nums[j] === target){
                result.push(i);
                result.push(j)
            }
        }


        return result;
    }

};