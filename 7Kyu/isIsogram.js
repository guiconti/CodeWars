function isIsogram(str){

  return str.length===str.toLowerCase().split("").filter((element, index, self) => index==self.indexOf(element)).length;

}