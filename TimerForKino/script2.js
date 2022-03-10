//--------Other scripts--------
let icon = document.querySelectorAll(".icon");
let reg = document.querySelector(".registerForm");
let fonReg = document.querySelector(".registerFon");
let R = document.querySelector(".r");
let cencel = document.querySelector(".cencel");
let ok = document.querySelector(".ok");
let blockKino = document.querySelectorAll(".blockForKino");
let nameKino = document.querySelectorAll(".nameKino");
let pKino = document.querySelectorAll(".photoKino");

for (let i = 0; i < 5; i++) {
    icon[i].addEventListener("mouseover", function () {
        icon[i].style.backgroundSize = "80px";

    });
    icon[i].addEventListener("mouseout", function () {
        icon[i].style.backgroundSize = "50px";
    });
}
R.addEventListener("click", function () {
    reg.style.display = "flex";
    fonReg.style.display = "block";
    setTimeout(function () {
        reg.style.opacity = "100%";
        fonReg.style.opacity = "100%";
    }, 500);
})
fonReg.addEventListener("click", escapeReg);
ok.addEventListener("click", escapeReg);
cencel.addEventListener("click", escapeReg);

function escapeReg() {
    reg.style.display = "none";
    fonReg.style.display = "none";
    reg.style.opacity = "0%";
    fonReg.style.opacity = "0%";
}


for(let n = 0; n < blockKino.length; n++) {
    blockKino[n].addEventListener("mouseover", function () {
        pKino[n].style.backgroundSize = "110% 110%";
        nameKino[n].style.opacity = "100%";
        blockKino[n].style.cursor = "pointer";
    });

    blockKino[n].addEventListener("mouseout", function () {
        pKino[n].style.backgroundSize = "100% 100%";
        nameKino[n].style.opacity = "80%";

    });
}
