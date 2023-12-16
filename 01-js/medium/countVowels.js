/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let str_final=str.toLowerCase()
  let count = 0
  for(let i=0;i<str.length;i++)
  {
    if(str_final[i]=='a'||str_final[i]=='e'||str_final[i]== 'i'||str_final[i]== 'o'||str_final[i]== 'u'){
      count=count+1
    }
  }
  return count  
  // Your code here
}

module.exports = countVowels;