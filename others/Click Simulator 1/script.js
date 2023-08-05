var area = document.getElementById('area');
var btn = document.getElementById('click')
var startTxt = document.getElementById('start');
var time = document.getElementById('time');
var clicks = document.getElementById('clicks')
var s =0 , last=0,ms=0,min=0,tms = 0,click=0;
let started = false;

function start(){
    if(!started){
    work();
    started = true;
    btn.style.display = 'block';
    startTxt.style.display = 'none'; 
    setInterval(function(){
        tms+=1;
        if(tms >=100){
            s = Math.floor(tms/100);
            ms = tms - (s*100);
        }
        if(s >= 60){
            min = Math.floor(s/60);
            s = s - (min*60);
        }
        time.innerText = min + 'm ' + s+'s ' + ms + 'ms' ;
        },10);}
}
function work(){
var X = area.offsetWidth;
var Y = area.offsetHeight;
var randomX = Math.floor(Math.floor(Math.random()*X));
var randomY = Math.floor(Math.floor(Math.random()*Y));
if(randomX < X && randomY < Y){
btn.style.left = randomX +'px';
btn.style.top =  randomY +'px';
console.log(btn.style.left);
console.log(btn.style.top);
}else{work();}
}

btn.addEventListener('click',function(){
    work();
    click += 1;
    clicks.innerText = click;

});