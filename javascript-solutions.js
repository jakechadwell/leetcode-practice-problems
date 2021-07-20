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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maximum = nums[0];
    for(let i=0;i<nums.length;i++){
        let sum = nums[i-1] + nums[i];
            if(sum > nums[i]){
                nums[i] = sum;
            }
            if(nums[i] > maximum){
                maximum = nums[i];
            }
    }
    return maximum;
};

var isSubsequence = function(s, t) {
    if(s === "") return true;
    if(t == "") return false;

    if(s[s.length - 1] === t[t.length - 1]) {
        return isSubsequence(s.substring(0, s.length - 1), t.substring(0, t.length - 1));
    } else {
        return isSubsequence(s, t.substring(0, t.length - 1));
    }
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;
    let remainder = 1;
    while (n > 0) {
        let num = digits[n-1] + remainder;
        if (num < 10) {
            digits[n-1] = num
            remainder = 0;
            return digits
        } else {
            digits[n-1] = 0;
            n--;
        }
    }
    digits.unshift(remainder);
    return digits;
};

/**
 * @param {string} s
 * @return {number}
 */
const symbols = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
};

let romanToInt = function (str) {
    let res = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        let currVal = Number(symbols[str[i]]);
        let prevVal = i + 1 >= str.length ? null : Number(symbols[str[i + 1]]);
        res = prevVal != null && currVal < prevVal ? res - currVal : res + currVal;

    }
    return res;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
    }
    return strs[0];
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1)
        return l2;

    if (!l2)
        return l1;

    let list = new ListNode();
    let pointer = list;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            list.next = l1;
            l1 = l1.next
        } else {
            list.next = l2;
            l2 = l2.next;
        }

        list = list.next;
    }

    list.next = l1 || l2;

    return pointer.next;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Array(n)
    return climb_Stairs(n, memo);
};

//memoized solution

var climb_Stairs = function(i , memo){

    if(i < 0){
        return 0
    }

    if(i === 0){
        return 1
    }

    if(!memo[i]){
        memo[i] = climb_Stairs(i-1, memo) + climb_Stairs(i-2, memo);
    }

    return memo[i]
}