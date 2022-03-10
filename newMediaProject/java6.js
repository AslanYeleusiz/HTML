const section2 = document.querySelector(".section2");
const section2_pos_1 = document.querySelector("#pos_1");
const section2_pos_2 = document.querySelector("#pos_2");
const section2_pos_3 = document.querySelector("#pos_3");
const section2_pos_4 = document.querySelector("#pos_4");
const section2_pos_5 = document.querySelector("#pos_5");
const section2_pos_6 = document.querySelector("#pos_6");
const nodeList = Array.from(document.querySelectorAll("#imagess"));
const nodeList_1 = Array.from(document.querySelectorAll(".onas"));
const menuItems = Array.from(document.querySelectorAll(".menu-items"));
var btn = document.querySelectorAll(".btn")
var hiddenElement = document.querySelectorAll(".hiddenElement");



btn[0].addEventListener('click', function(){
    hiddenElement[0].scrollIntoView({block: "center", behavior: "smooth"});
});
btn[1].addEventListener('click', function(){
    hiddenElement[1].scrollIntoView({block: "center", behavior: "smooth"});
});
btn[2].addEventListener('click', function(){
    hiddenElement[2].scrollIntoView({block: "center", behavior: "smooth"});
});
btn[3].addEventListener('click', function(){
    hiddenElement[3].scrollIntoView({block: "center", behavior: "smooth"});
});


window.addEventListener("scroll", function(){
    scrollFunc(250,section2_pos_1);
    scrollFunc(550,section2_pos_2);
    scrollFunc(1000,section2_pos_3);
    scrollFunc(1350,section2_pos_4);
    scrollFunc(1750,section2_pos_5);
    scrollFunc(2150,section2_pos_6);
    scrollFuncForScreen(2700,nodeList_1);
    scrollFuncForScreen(3351,nodeList);
    menu(0,menuItems,0);
    menu(550,menuItems,1);
    menu(2879,menuItems,2);
    menu(3200,menuItems,3);
});
document.addEventListener("DOMContentLoaded", function(){
    scrollFunc(250,section2_pos_1);
    scrollFunc(550,section2_pos_2);
    scrollFunc(1000,section2_pos_3);
    scrollFunc(1350,section2_pos_4);
    scrollFunc(1750,section2_pos_5);
    scrollFunc(2150,section2_pos_6);
    scrollFuncForScreen(2700,nodeList_1);
    scrollFuncForScreen(3351,nodeList);
    menu(0,menuItems,0);
    menu(250,menuItems,1);
    menu(2279,menuItems,2);
    menu(3700,menuItems,3);
});
function scrollFunc(a,b){
    let scrollPos = window.scrollY;
    if(scrollPos >= a){
        b.classList.add("active");
    }else{
        b.classList.remove("active");
    }
};
function scrollFuncForScreen(b,c){
    let scrollPos = window.scrollY;
    if(scrollPos > b){
        for(var a=0; a<c.length; ++a){
            c[a].classList.remove("active");
        }
    }else{
        for(var a=0; a<c.length; a++){
            c[a].classList.add("active");
        }
    }
};
function menu(b,c,d){
    let scrollPos = window.scrollY;
    if(scrollPos >= b){
        for(var a=0; a<c.length; ++a){
            c[a].classList.remove("active");
        }
        c[d].classList.add("active");
}
}
