let items = document.getElementById('hero');
let elem = document.getElementById('elem');
let span = ['Click Simulator 1','Clicker Simulator 2','Cube','Currency Converter','ecommerce','Entrance Quiz','extension','Jhandi burja','Memory','Peace Zone english school','Tic Tac Toe','Tick'];


for(var i= 0;i<span.length;i++){
    var clone =  elem.cloneNode('true');
    clone.children[0].children[1].children[0].textContent = span[i];
    clone.children[0].children[0].children[0].src = 'images/'+span[i]+'.png';
    clone.id = "elem" + i;
    items.appendChild(clone);
    }

function opn(parent){
    nme = parent.children[0].textContent;
   url = window.location.href;
   url = url.replace('other.html', '');
   open(url+"/others/"+nme + "/index.html");
}

elem.style.display = 'none';

function menu(){
    var x = document.getElementById("topNav");
        if(x.classList.contains('open')){
            x.classList.remove('open');
        }else{
            x.classList.add('open');
        }
}
