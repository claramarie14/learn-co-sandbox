$(document).ready(function(){
  $(".cell").on("click", markCell);
 
 
 
 let TOM = "x"
 let JACOB = "o"
 
 function markCell() {
   
   for (var i=0;  i <= 100; i++){
      if (i%2===0){
    console.log (TOM)}
      else {
    console.log (JACOB)}
  }

   
   
   this.innerText = TOM
 }   
    
   
   
   
   
   
   
   
   
   
   
   
    
})
