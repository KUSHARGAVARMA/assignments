/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  function isAlphanumeric(str) {
    // Regular expression to match only alphanumeric characters
    var alphanumericRegex = /^\w+$/;
  
    // Test if the entire string matches the alphanumeric regex
    return alphanumericRegex.test(str);
  }
  
  let str_final= str.toLowerCase();
  let reverse_str="";
  let final_str="";

  // 
  for(let i = 0; i < str.length; i++) {
    if (isAlphanumeric(str_final[i])) {
      final_str += str_final[i];
    } else {
      final_str += '';
    }
  }
  for (let i = final_str.length-1; i>=0; i--){
    reverse_str+=final_str[i]
  }
  return reverse_str==final_str;
  
}

module.exports = isPalindrome;
