var myIndex = 0;
var myIndex2 = 0;
carousel();
carousel2();

function carousel() {
  var i;
  var x = document.querySelectorAll(".mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "inline"; 
  setTimeout(carousel, 4500);    
}
function carousel2() {
  var j;
  var y = document.querySelectorAll(".slides-text");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none"; 
  }
  myIndex2++;
  if (myIndex2 > y.length) {myIndex2 = 1}    
  y[myIndex2-1].style.display = "inline"; 
  setTimeout(carousel2, 4500);    
}