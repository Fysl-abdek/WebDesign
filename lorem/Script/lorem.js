













let mybuttom = document.querySelector(".scroll-to i");
window.onscroll = function () {
        "use strict";
        if(window.pageYOffset >= 800){
             mybuttom.style.display="block";
        }else{
             mybuttom.style.display="none";
        }
}
mybuttom.onclick = function (){
        "use strict";
        window.scrollTo(0,0)
}
let icon = document.querySelector(".icon"),
    class_show = document.querySelector(".links"),
    showlist = document.querySelector(".links ul");
icon.onclick = function () {
        "use strict";
        if( showlist.classList.contains("show")){
            showlist.removeAttribute("class","show")  
        }else{
            showlist.setAttribute("class","show")  
        }
        // showlist.setAttribute("class","show")
        // showlist.style.display = "block";
}
icon.onblur = function (){
        "use strict";
        if( showlist.classList.contains("show")){
                showlist.removeAttribute("class","show")  
            }
        }
