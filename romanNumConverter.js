function convertToRoman(num) {
    // 1. create roman numeral object table to look up numbers;
    let romanNumeral = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    // 2. create accumulator where we store roman numeral and return it as result
    let result = "";

    //3. looping every key in look up table and store its number value in a variable;
    for (let key in romanNumeral){
       let numberValue = romanNumeral[key];
      //check if the num is dividable by the numbers in look up table like 1000, 500 then 100 etc.
       while (num%numberValue < num) {
        //and the remainder is smaller than the num, we'll push matching roman letter to result; 
          result += key;
          //then subtract the num from the number value from look up table and repeat the whole process until we reach 0;
          num -= numberValue; 
       }
    }
    return result;
   }
   
 console.log(convertToRoman(36));  
 console.log(convertToRoman(798));
 console.log(convertToRoman(4));
