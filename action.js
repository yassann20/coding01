
    var trigger = document.getElementById("menu-action");
    if(trigger){
        trigger.addEventListener("click",function(){
            var targetspan1 = document.getElementById("span1");
            var targetspan2 = document.getElementById("span2");
            var targetspan3 = document.getElementById("span3");
            var targetnav = document.getElementById("menu-nav");
            var targetul = document.getElementById("menu-ul");
            targetspan1.classList.toggle("active");
            targetspan2.classList.toggle("active");
            targetspan3.classList.toggle("active");
            targetnav.classList.toggle("opacity");
            targetul.classList.toggle("positionX")
        },false);
    }
