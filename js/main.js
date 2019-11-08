

var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var input = document.getElementById('input');
var result = document.getElementById('result').textContent;
var error = document.getElementById('error');
error.style.visibility='hidden';
minus.addEventListener('click', subtract)
function subtract(){
    if(document.getElementById('result').textContent!=='NaN'){
        result= parseInt(result)-parseInt(input.value);
        document.getElementById('result').textContent = result;
        error.style.visibility='hidden';
    }
    if(parseInt(result)<0){
        document.getElementById('result').style.color='red';
    }
    else if(parseInt(result)>=0){
        document.getElementById('result').style.color='black';
    }
   else{
       result=0;
       document.getElementById('result').textContent='0'
       error.style.visibility='';
   }
}

plus.addEventListener('click', add)
function add(){
    if(document.getElementById('result').textContent!=='NaN'){
        result= parseInt(result)+parseInt(input.value);
        document.getElementById('result').textContent = result;
        error.style.visibility='hidden';
    }
    if(parseInt(result)<0){
        document.getElementById('result').style.color='red';
    }
    else if(parseInt(result)>=0){
        document.getElementById('result').style.color='black';
    }
    else{
        result=0;
        document.getElementById('result').textContent='0'
        error.style.visibility='';
    }
}

minus.addEventListener('mouseover', hoverMinus)
plus.addEventListener('mouseover', hoverPlus)
function hoverMinus(){
    minus.style.backgroundColor= 'white';
    minus.style.color = '#A9A9A9'; 
}
function hoverPlus(){
    plus.style.backgroundColor= 'white';
    plus.style.color = '#A9A9A9'; 
}
minus.addEventListener('mouseout', notHoverMinus)
plus.addEventListener('mouseout', notHoverPlus)
function notHoverMinus(){
    minus.style.backgroundColor= '#A9A9A9';
    minus.style.color = 'white'; 
}
function notHoverPlus(){
    plus.style.backgroundColor= '#A9A9A9';
    plus.style.color = 'white'; 
}




