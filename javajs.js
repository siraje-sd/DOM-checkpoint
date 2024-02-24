var btnplus=Array.from(document.getElementsByClassName('btn+'))
console.log('btn+' ,btnplus);
for(let el of btnplus){
    el.addEventListener("click",function(){
        let t=(el.previousElementSibling).value;
        let s=parseInt(t);
        s++;
        (el.previousElementSibling).value=s;
        sum();
    })
}
var btnmoin=Array.from(document.getElementsByClassName('btn-'))
for(let el of btnmoin){
    el.addEventListener("click",function(){
        let t=(el.nextElementSibling).value;
        let s=parseInt(t);
        if(s>0){
            s--;
        }
        (el.nextElementSibling).value=s;
        sum();
    })
}
function sum(){
    var price=Array.from(document.getElementsByClassName('price'))
    var qtn=Array.from(document.getElementsByClassName('qtn'))
    var s=0
    for (let i = 0; i<price.length; i++) {
        s+=parseInt(price[i].innerText)*parseInt(qtn[i].value)
    }
    return (document.querySelector(".total").innerHTML=s+" "+"TND")
}
var heart=Array.from(document.getElementsByClassName('fa-heart'))
for(let el of heart){
    el.addEventListener("click",function(){
        el.classList.toggle("red")
    })
}

var dl=Array.from(document.getElementsByClassName('fa-trash'))

for(let el of dl){
    el.addEventListener("click",function(){
        el.parentNode.remove();;
    })
}