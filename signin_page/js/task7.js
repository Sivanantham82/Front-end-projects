let ip1 = document.getElementById("ip1");
let ip2 = document.getElementById("ip2");
let ip3 = document.getElementById("ip3");
let ip4 = document.getElementById("ip4");
let para = document.getElementById("para2");
let para2 = document.getElementById("para3");
let a = ip3.value;
let b = ip4.value;
let c=ip1.value
ip1.addEventListener("focusin",()=>{
    para.style.display="none"
})
ip3.addEventListener("focusout", () => {
  if (ip1.value != "") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
    para.style.color = "red";
    para.textContent = `"please enter the feild"`;
  }
});
ip4.addEventListener("focusout", () => {
  para2.style.display = "block";

  if (a == b) {
    para2.style.color = "green";
    para2.textContent = `"confirm password is matched"`;
  } else {
    para2.style.color = "red";
    para2.textContent = `"not match your confirm password"`;
  }
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
});
let icon=document.getElementById("icon")
icon.addEventListener("click",()=>{
    ip4.type="text"
})
