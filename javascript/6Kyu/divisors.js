function divisors(integer) {
  
    var result = [];  

    //  Loop through every possibility
    for (var i = 2; i<=Math.floor(integer/2); i++){
    
        //  Check if it is divisible
        if (integer%i === 0){
        
            result.push(i);
        
        }
    
    }
    
    return result.length===0?integer + " is prime":result;
  
};