function squareOrSquareRoot(array) {

  //  Loop through every element
  return array.map((number) => {
    
    const numberSqrt = Math.sqrt(number);
    
    //  Check if the square number is a integer
    return numberSqrt%1 === 0?numberSqrt:number*number;
    
  });

}