let ip1=document.getElementById("ip1")
let ol=document.getElementById("ol")
let ip2=document.getElementById("ip2")
ip1.addEventListener("focusout",()=>{
    if(ip1.value!="")
    {
    ip2.style.display="block"
    for(i=1;i<=ip1.value;i++)
    {
        let li=document.createElement("li")
        li.textContent="this is para"
        li.style.color="#fff"
        ol.appendChild(li) 
    }
}
}) 

ip2.addEventListener("focusout",()=>{
    let res=ip2.value
    ol.children[res-1].textContent="hi"
})