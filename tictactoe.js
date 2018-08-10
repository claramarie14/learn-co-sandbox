$(document).ready(function(){
  $(".cell").on("click", markCell);
 
 
 
 let MARK = "x"
 
 
 function markCell() {
   
   for (var i=MARK;  i <= 100; i++){
  if (i%3==0 && i%5==0){
    console.log("fizzbuzz")}
  else if (i%5==0){
    console.log ("buzz")}
  else if (i%3==0){ 
    console.log ("fizz")}
  else 
    console.log (i)
  }

   
   
   this.innerText = MARK
 }   
    
   
   
   
   
   
   
   
   
   
   
   
    
})
