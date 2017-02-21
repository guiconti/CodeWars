function tribonacci(signature,n){
  
  var count = 0;
  
  //  Loop until the array is at the length requested
  while (signature.length < n){
  
    //  Add the 3 elements and insert into the array
    signature.push(signature.slice(count, count + 3).reduce((a,b) => a + b, 0));
    count++;
    
  }
  
  return signature.slice(0, n);
  
}