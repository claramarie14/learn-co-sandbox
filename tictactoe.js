$(document).ready(function(){
  $(".cell").on("click", markCell);
 
 
 
 let MARK = "x"
 let TEST = "o"
 
 function markCell() {
   
   for (var i=0;  i <= 100; i++){
      if (i%2===0){
    console.log (MARK)}
      else {
    console.log (TEST)}
  }

   
   
   this.innerText = MARK
 }   
    
   
   
   
   
   
   
   
   
   
   
   
    
})
