$(document).ready(function(){
  $(".cell").on("click", markCell);
 
 
 
 let TOM = "x"
 
 function markCell() {
      this.innerText = TOM

      if (TOM === "x"){
        TOM = "o"
    console.log (TOM)}
      else if (TOM === "o"){
        TOM ="x"
    console.log (TOM)}
  

   
   
 }   
    
   
   
   
   
   
   
   
   
   
   
   
    
})
