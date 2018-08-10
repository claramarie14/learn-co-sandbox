$(document).ready(function(){
  var winArr = [
 ["#0-0", "#1-0", "#2-0"], // top row
 ["#0-1", "#1-1", "#2-1"], // middle row
 ["#0-2", "#1-2", "#2-2"], // bottom row
 ["#0-0", "#0-1", "#0-2"], // left column
 ["#1-0", "#1-1", "#1-2"], // middle column
 ["#2-0", "#2-1", "#2-2"], // right column
 ["#0-0", "#1-1", "#2-2"], // back slash
 ["#0-2", "#1-1", "#2-0"] // forward slash
]

  $(".cell").on("click", markCell);
 
 
 
 let TOM = "x"
 
 
 function markCell() {
     if (this.innerText === ""){
       this.innerText = TOM

      if (TOM === "x"){
        TOM = "o"
    console.log (TOM)}
      else if (TOM === "o"){
        TOM ="x"
    console.log (TOM)}
  
  }
}   




})
