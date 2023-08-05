var input = document.getElementById('fromNum');
var to = document.getElementById('toNum');
var fromSeclect = document.getElementById('from');
var toSeclect = document.getElementById('to');

window.addEventListener('keyup',display);
window.addEventListener('click',display);

display();
function display(){
    var toselected = toSeclect.options[toSeclect.selectedIndex].value;
    var fromselected = fromSeclect.options[fromSeclect.selectedIndex].value;
    to.value = (input.value / toselected) * fromselected;
}