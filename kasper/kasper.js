let srolling = document.querySelector(".scroll-to-top");
window.onscroll = function () {
  "use strict";
  if(window.pageYOffset >= 1000){
    srolling.style.display="block";
  }else{
    srolling.style.display="none";
  }
}
 scrolling = function (){
	"use strict";
	window.scrollTo (0,0)
}
