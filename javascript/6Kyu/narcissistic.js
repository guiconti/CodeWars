function narcissistic( value ) {
  
    return value.toString().split('').map((number) => Math.pow(number, value.toString().length)).reduce((a, b) => a + b, 0)===value;
  
}
