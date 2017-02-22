function humanReadable(seconds) {

  var hours = Math.floor(seconds/3600);
  var minutes = Math.floor((seconds-hours*3600)/60);
  var seconds = Math.floor((seconds-hours*3600)-(minutes*60));
  
  return ((hours/10)>=1?"":"0") + hours + ":" + ((minutes/10)>=1?"":"0") + minutes + ":" + ((seconds/10)>=1?"":"0") + seconds; 

}