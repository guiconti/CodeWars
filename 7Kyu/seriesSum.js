function seriesSum(n) {

  var result = 0.00;

  for (var i = 0; i<n; i++){
  
    result += 1 / (1 + i * 3);
  
  }
  
  return result.toFixed(2);

}