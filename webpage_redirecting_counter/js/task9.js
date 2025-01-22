console.log("start");
console.log("a");
let temp=0;
let button=document.getElementById("button");
let button1=document.getElementById("button1");
button.addEventListener("click",fun);
let h1=document.getElementById("head");
let res;
function fun(){
    res=setInterval(()=>{
        h1.textContent=`wait:${temp}`;
        h1.style.textAlign="center";
        console.log(temp++);
        if(temp==12){
            alert(location.href="https://pixabay.com/images/search/");
        }
        
        
    },1000);
button.removeEventListener("click",fun);

}
function stop(){
    let total=10;
    h1.textContent=`window will be launche in: ${total-temp}sec`;
    clearInterval(res);
  
    button.addEventListener("click",fun);
    let img=document.createElement("img");
    img.src = "../assests/pause-solid.svg";
    h1.appendChild(img);

}

console.log("end");
button1.addEventListener("click",stop);