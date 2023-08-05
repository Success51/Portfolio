    var bar = document.getElementById('bars');
    var ul = document.getElementById('ul');
    var btns = document.querySelectorAll('.btns');
    var header = document.getElementById('header');
    var Name = document.getElementById('name');
    var sign = document.getElementById('sign');
    var SignUp = document.getElementById('SignUp');
    var body = document.getElementById('container');
    var inputName = document.getElementById('nameInput');
    var signed = document.getElementById('signed');
    var get = document.getElementById('get');
    var items = document.getElementById('items');
    var item = document.getElementById('item');
    var imgs = ['rubix.jpg','iphone13.png','fan.jpg','bike.webp','watch.jpg','drone.jpg'];
    var pNames = [ 'Rubix Cube 3 X 3','Apple iPhone 13 Pro Max 128GB','Portable Mini Fan','Yamaha Fzs Fi Dd','D13 Smart Watch','Wing 2 Pro Foldable Mini Drone'];
    var Prices = ['3150','191990','1400','347900','2000','4999']
    var NOI = document.getElementById('NOI');
    var p_Name = document.getElementById('p_Name');
    var price = document.getElementById('price');
    var total = document.getElementById('total');
    var itm = document.getElementById('itm'); 
    var itms = document.getElementById('itms'); 
    var FPrice = document.getElementById('FPrice');
    
    for(var i= 0;i<imgs.length;i++){
    var clone =  item.cloneNode('true');
    clone.children[0].id = item.children[0].id + i;
    clone.children[1].src = 'images/'+imgs[i];
    clone.children[2].innerText = pNames[i];
    clone.children[3].children[0].innerHTML = Prices[i];
    items.appendChild(clone);
    }

    if(localStorage.getItem('Name') != null){
       Name.innerHTML = localStorage.getItem('Name') + '!';
        get.style.display = 'block';
        sign.style.display = 'none';
    }

    bar.addEventListener('click',function(){
        ul.classList.toggle('res');

        btns.forEach(btn => {
            if(ul.classList.contains('res')){
            btn.style.display= 'block';
            }
            else{
                btn.style.display= 'none';
            }
        });
    })
    

    // document.onkeydown = function (e) {
    //     if(e.keyCode == 123 || e.ctrlKey && e.shiftKey && e.keyCode == 73 || e.ctrlKey && e.shiftKey && e.keyCode == 74 ||e.ctrlKey && e.keyCode == 85 ) {
    //         return false;
    //     }
    // }


        sign.addEventListener('click',function(){
            body.style.filter = 'blur(8px)';
            body.style.webkitFilter = 'blur(8px)';

            SignUp.style.display = 'flex'
        });

        signed.addEventListener('click',function(){
            if(localStorage.getItem('Name') == null){
            localStorage.setItem('Name',inputName.value)
           Name.innerHTML = inputName.value;
           SignUp.style.display = 'none';
           body.style.filter = 'blur(0px)';
           body.style.webkitFilter = 'blur(0px)';
        } else{
            sign.style.display = 'none';
        }
        })
        if(localStorage.getItem('Name')==null){
            document.getElementById('sout').innerHTML = 'Sign Up';
        }
        function sout(){
            if(localStorage.getItem('Name')!=null){
            localStorage.removeItem('Name');
            location.reload();
            document.getElementById('sout').innerHTML = 'Sign Up';
            }else{
            body.style.filter = 'blur(8px)';
            body.style.webkitFilter = 'blur(8px)';
            SignUp.style.display = 'flex';
            }
        }

        function add(a){
            
            var btn = document.getElementById(a);
            var img = btn.children[0].getAttribute('src')
            if (img == 'images/cart_only.png') {
                btn.children[0].src = 'images/tick.png';
                var cloned = itm.cloneNode('true');
                var P_NME = cloned.children[0].innerHTML;
                document.getElementById('itms').appendChild(cloned);
                 cloned.children[0].innerHTML =  btn.parentElement.children[2].innerHTML;
                 cloned.children[1].innerHTML = btn.parentElement.children[3].children[0].innerHTML;
                NOI.innerHTML = cloned.parentElement.childElementCount - 1;
                 total.innerHTML = parseInt(cloned.children[1].innerHTML)+ parseInt(total.innerHTML);
                 console.log(btn.parentElement.children[2].innerHTML+' has been added to cart!');
              }
        }

        function purchase(){
            var qr = document.getElementById('pur');
            body.style.filter = 'blur(8px)';
            body.style.webkitFilter = 'blur(8px)';
            qr.style.display = 'block';
          
        }
        
        window.addEventListener('keydown',function(e){
            if(e.keyCode == 27 && document.getElementById('pur').style.display =='block' ){
                document.getElementById('pur').style.display = 'none';
                body.style.filter = 'blur(0px)';
                body.style.webkitFilter = 'blur(0px)';
            }
        })