

//<!-------------Including-Objects------------>
var poBall = document.getElementById("ball");
var clicks = document.getElementById("clicks");
var timer  = document.getElementById("time");
var start  = document.getElementById("start");
var gameOver = document.getElementById("gameOver");
var fClick = document.getElementById("fClick");
var playAgain = document.getElementById("playAgain");
var highest = document.getElementById("highest");
var shop = document.getElementById("shop");
var v = 0,R=1,a=0,t=60;

//<!--------------------shop----------------->
var shopwin = document.getElementById("shopwin");
var spec = document.getElementById("spec");
var money = parseInt(document.getElementById("money").innerText);
var pName = ['x2','add_20s'];
var cost = ['60','20'];

for(var i=0;i<pName.length;i++){
var newPower = document.createElement('img');
newPower.src = "images/"+ pName[i] +".png";
newPower.classList .add("power",pName[i]);
newPower.id = pName[i];
shopwin.appendChild(newPower);
}

//<!---------------------Including-each-powerups------>
var power = document.querySelectorAll(".power");

//<!----------------------Click-PowerUps--------->
for (const img of power) {
    img.addEventListener('click', function(event) {
        spec.style.display = "block";
        spec.querySelectorAll('img')[1].src = img.src;
        spec.querySelector("span").innerHTML = cost[pName.indexOf(img.id)] +"🪙";
        //<!--------------------Get-Button------------->
        spec.querySelector("button").addEventListener("click",function(){
            if(money >= parseInt(cost[pName.indexOf(img.id)])){
                eval(img.id+"();");
               alert("congo");
           }
        });
    });
};
//<!---------------------Addding-highest-score----------->
highest.innerHTML = localStorage.getItem("Highest");
money = localStorage.getItem("money");

poBall.style.display = "none";


//<!----------------Ball-Moving-------------->
function move(){
        var X = screen.width-100;
        var Y = screen.height-100;
        
        var randX = Math.floor(Math.random()*X);
        var randY = Math.floor(Math.random()*Y);
        poBall.style.marginLeft = "-800px";
        poBall.style.marginLeft = randX;
        
        poBall.style.marginTop = "-550px";
        poBall.style.marginTop = randY;
        
        a += R;
        clicks.innerHTML = a;
        
        }
poBall.addEventListener("click",move);



//<!--------Start-Function---------------->
function starts(){

poBall.style.display = "block";
start.style.display = "none";
move();

//<!---Time-Function-inside-start-function---->
function time(){
timer.innerHTML = t + "s";
t = t -1;
if(t==0){
gameOver.style.display = "flex";
poBall.style.display = "none";
fClick.innerHTML = a;
document.getElementById("coins").innerHTML = "🪙" + parseInt(a/2);
money = eval(money + "+" +parseInt(a/2));
if(a>localStorage.getItem("Highest")){
localStorage.setItem("Highest",a);
}
}
}

//<!----------calling-same-function-in-interval-------->
setInterval(function(){
if(t>=0){
time();
}
}
,1000);
}

//<!------------calling-function-on-click------------>
start.addEventListener("click",starts);


//<!------------working-of-playAgain-Button----------->
playAgain.addEventListener("click",function(){
location.reload();
});

//<!-------------------Shop-Window-show-hide------------>
shop.addEventListener("click", function(){
    if(v == 0){
        shopwin.style.display = "block";
        v=1;
    }else{
        shopwin.style.display = "none";
        v = 0;
    }
});


//<!----------------CLose-function--------->
document.getElementById("close").addEventListener("click",function(){
spec.style.display = "none";
});

//<!-----------money-render--------->
function moneymoney(){
    document.getElementById("money").innerText = money;
    localStorage.setItem("money",money);
}

setInterval(moneymoney,100);


//<!-------------power-functions--------->
function x2(){
    R = 2*R;
    money = money - parseInt(cost[pName.indexOf("x2")]);
}

function add_20s(){
    money = money - parseInt(cost[pName.indexOf("add_20s")]);
    t = t+ 20;
    timer.innerHTML=t + "s";
}