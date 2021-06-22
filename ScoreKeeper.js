var p1=document.querySelector("#p1");
var p2=document.getElementById("p2");
var o1=document.getElementById("p1display");
var o2=document.getElementById("p2display");
var reset=document.getElementById("r");
var input=document.querySelector("input");
var winningscoredisplay=document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5;
console.log(o1);
console.log(o2);
console.log(reset);
p1.addEventListener("click",function(){
    if(!gameover)
    {
        if(p1score!==winningscore)
        {
            p1score=p1score+1;
        }
        else
        {
            o1.classList.add("winner");
            alert("Game Over!!!");
            gameover=true;
        }
        o1.textContent=p1score;
    }
});
p2.addEventListener("click",function(){
    if(!gameover){
        if(p2score!==winningscore)
        {
            p2score+=1;
        }
        else
        {
            o2.classList.add("winner");
            alert("Game Over!!!");
            gameover=true;
        }
        o2.textContent=p2score;
    }
});
reset.addEventListener("click",function(){
    p1score=0;
    p2score=0;
    o1.textContent=p1score;
    o2.textContent=p2score;
    o1.classList.remove("winner");
    o2.classList.remove("winner");
});
input.addEventListener("change",function(){
    winningscoredisplay.textContent=input.value;
    winningscore=Number(input.value);
});