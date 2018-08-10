$(document).ready(function(){
  $(".cell").on("click", markCell);
 
 
 
 let MARK = "x"
 
 
 function markCell() {
   
   for (var i=MARK;  i <= 100; i++){
    if (i%2==0){
    console.log ("MARK")}
    else {
    console.log ("o")}
  }

   
   
   this.innerText = MARK
 }   
    
   
   
   
   
   
   
   
   
   
   
   
    
})
