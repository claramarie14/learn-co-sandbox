$(document).ready(function(){
  $(".cell").on("click", markCell);
 
 
 
 let TOM = "x"
 
 function markCell() {
      this.innerText = TOM

      if (TOM === "x"){
    console.log ("o")}
      else if (TOM === "o"){
    console.log ("x")}
  

   
   
 }   
    
   
   
   
   
   
   
   
   
   
   
   
    
})
