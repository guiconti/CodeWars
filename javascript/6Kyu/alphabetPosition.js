function alphabetPosition(text) {
  
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    //  Remove all special characters/numbers and turns the string into an array
    var stringArray = text.replace(/[^A-Z]/ig, '').split("");
    
    //  For each char find its index in the alphabet and then join into a string again
    return stringArray.map((character) => alphabet.indexOf(character.toLowerCase()) + 1).join(" ");
  
}