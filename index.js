
document.querySelector("#submit").addEventListener("click",function(){
var randnum=Math.floor((Math.random()*10) +1);
var usernum=document.querySelector("#num").value;
if(usernum==randnum){
    alert("You Won buddy !")
}
else{
    document.querySelector("#display").textContent="You Lose ,Better Luck Next Time...!";
}
document.querySelector("#answer").textContent="The Computer Number is "+randnum;
}

);