/*
1) Problem: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. You can return the array with its elements in any order.

Sample Input: [1, 2, 3, 5], [1, 2, 3, 4, 5]
Sample Output: [4]

Sample Input: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub", "Rahim"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]
Sample Output: ["pink wool", "Rahim"]

*/

function diffArray(arr1, arr2) {
  return arr1
          .concat(arr2)
          .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));