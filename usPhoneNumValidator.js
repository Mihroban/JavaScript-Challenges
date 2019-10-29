//Return true if the passed string looks like a valid US phone number.

function telephoneCheck (str) {
    let validFormat = [
        // 555-555-5555
        /^\d{3}-\d{3}-\d{4}$/,
        
        // 1 555-555-5555
        /^1 \d{3}-\d{3}-\d{4}$/,
        
        // 5555555555
        /^\d{10}$/,
        
        // (555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/,
        
        // 1 555 555 5555
        /^1 \d{3} \d{3} \d{4}$/,
        
        // 1 (555) 555-5555
        /^1 \(\d{3}\) \d{3}-\d{4}$/,
        
        //1(555)555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/
      ];
   
  
for (let regex of validFormat) {
    if (regex.test(str)) {
        return true;
        break;
    }  
}
       return false;

}

console.log(telephoneCheck('5555555555'));
