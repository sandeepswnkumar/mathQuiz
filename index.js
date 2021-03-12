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
let submit = document.getElementById("submit");
submit.addEventListener('click',ans);
function ans(){
    if(answer.value=="")
    {
        alert("Your Answer is empty");
        return;
    }
    if(answer.value==mul)
    {
        // console.log("Right Answer");
        toast.classList.add("show");
        toast.classList.remove("hide");
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
