let counter=0;
let btnincrement= document.querySelector("#btnIncrement")
btnincrement.addEventListener('click',function(){
    counter++;
document.querySelector("#para").innerHTML=counter
})
let btndecrement=document.querySelector("#btnDecrement")
btndecrement.addEventListener('click',function(){
    counter--;
    document.querySelector("#para").innerHTML=counter
})
let btnReset=document.querySelector("#btnReset")
btnReset.addEventListener('click',function(){
    //confirm("DO you want to Close it");
    counter=0;
    document.querySelector("#para").innerHTML=counter
})