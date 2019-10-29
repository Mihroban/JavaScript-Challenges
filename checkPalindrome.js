function isPalindrome(str) {
    // Change the string into lower case and remove all non-alphanumeric characters
    var str = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    
    // check whether the passed string is empty or not;
    if (str === null || str.length === 0) {
        return false;
    }else if (str.length === 1 ) {
        return true;
    }
    
    //iterate through each charc and comapre the first charc to the last one;
    //if they are the same, then loop continues to next character from the front and the back
    //until they meet in the middle and every character matches, then the str is panlindrome.
    
    var i = 0;
    var j = str.length -1;
    while (i<j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i += 1;
      j -= 1;
    }
    return true;
}
console.log(isPalindrome("e@#y#^&e"));
