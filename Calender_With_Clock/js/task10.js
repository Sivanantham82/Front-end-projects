
let date2=new Date

let p1=document.getElementById("p1")
let p2=document.getElementById("p2")
let p3=document.getElementById("p3")
let p4=document.getElementById("p4")
let p5=document.getElementById("p5")
let p6=document.getElementById("p6")
let p7=document.getElementById("p7")


// p1.textContent=date2.getHours()
// p5.textContent=date2.getDate()
// p6.textContent=date2.getMonth()
// p7.textContent=date2.getFullYear()
// res = setInterval(() => {
//     let date = new Date();
//     // p1.textContent = date.getHours();
//     p2.textContent = date.getMinutes();
//     p3.textContent = date.getSeconds();

// }, 1000);

let time=document.getElementById("time")
time.addEventListener("change",()=>{
    p1.textContent=date2.getHours()
p5.textContent=date2.getDate()
p6.textContent=date2.getMonth()
p7.textContent=date2.getFullYear()
 setInterval(() => {
    let date = new Date();
    // p1.textContent = date.getHours();
    p2.textContent = date.getMinutes();
    p3.textContent = date.getSeconds();

}, 1000);
    let res=time.value
    let c=date2.getHours()
    
    if(res=="12hrs")
    {
        p1.textContent=c-12
        if(Number(res)>12)
        {
        p4.textContent="AM"
        }
        else
        {
            p4.textContent="PM"
        }
    }

})
