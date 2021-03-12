let i=1;
var second=30;
let num1 = Math.round(Math.random()*10);
let num2 = Math.round(Math.random()*10);
let show=document.getElementById("shows");
let timeInt=document.getElementById("timeInt");
show.innerText=`${num1} x ${num2}`; 
let mul = num1 * num2;//addition of two numbers
let answer = document.getElementById("answer")
let increment = document.getElementById("increment")
let toast = document.getElementById("toast");
var timeOut =setInterval(timer, 500);
var time =setInterval(increment1, 150);

let submit = document.getElementById("submit");

let wr=0;
let rt=0;
let right = document.getElementById("right");
let wrong = document.getElementById("wrong");



answer.focus();



function increment1(){
    if(i>=100)
    {
        clearInterval(time);
        window.location.reload();
    }
    else{
        i++;
        increment.style.width=i+'%';
    }
}



function timer(){
    if(second<=0)
    {
        clearInterval(timeOut);
        window.location.reload();
    }
    else{
        second--;
        timeInt.innerText=second + 's';   
    }
}

let rtans = sessionStorage.getItem("right");
right.innerText=rtans;
let wrans = sessionStorage.getItem("wrong");
wrong.innerText=wrans;



submit.addEventListener('click',ans);

if(right.innerText =="")
{
    right.innerText=0;
}
if(wrong.innerText=="")
{
    wrong.innerText=0;
}

function ans(){
    if(answer.value=="")
    {
        alert("Your Answer is empty");
        return;
    }
    if(answer.value==mul)
    {
        // console.log("Right Answer");
        let rtans = sessionStorage.getItem("right");
        rtans = Number(rtans) + 1;
        sessionStorage.setItem("right", rtans)
        toast.classList.add("show");
        toast.classList.remove("hide");
        
    }
    else
    {
        let wrans = sessionStorage.getItem("wrong");
        wrans = Number(wrans) + 1;
        sessionStorage.setItem("wrong", wrans)
        
    }
    setTimeout(reload, 200);
    answer.focus();
};


function reload(){
    window.location.reload();
}



let textBox = document.getElementById("textBox");
answer.addEventListener('keyup', (event) => {
    // console.log(`key=${event.key},code=${event.code}`);
    if(event.key=="Enter" && event.code=="Enter" || event.key=="Enter" && event.code=="NumpadEnter" )
    {
        ans();
    }
});




