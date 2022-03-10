// ---------Script For Timer----------
let a = document.querySelectorAll(".timer");

let year = 90;
let day=0;
let hour=00;
let minute=00;
let second=10;


check();
update();


function nol(q,w){
    if(q/10<1) w.textContent="0"+q;
    else w.textContent=q;
}

function update(){
    nol(year,a[0]);
    nol(day,a[1]);
    nol(hour,a[2]);
    nol(minute,a[3]);
    nol(second,a[4]);
}

function check(){
    if(second>=60){
        minute++;
        second=second-60;
    }else if(second<0){
        minute--;
        second=59;
    }
    if(minute>=60){
        hour++;
        minute=minute-60;
    }else if(minute<0){
        hour--;
        minute=59;
    }
    if(hour>=24){
        day++;
        hour=hour-24;
    }else if(hour<0){
        day--;
        hour=23;
    }
    if(day>=365){
        year++;
        day=day-365;
    }else if(day<0){
        year--;
        day=364;
    }if(year<0){
        year=0;
    }
}

function chekEnd(){
    if(year==0)
        if(day==0)
            if(hour==0)
                if(minute==0)
                    if(second==0)
                        return false;
    return true;
}

setInterval(function(){
    second--;
    check();
    update();
},1000);



