let a=document.getElementById("mydiv")
let b=document.getElementById("ip1")
b.addEventListener("focusout",()=>{
   let div=document.createElement("div")
   a.appendChild(div)
   let c= document.createElement("input")
   c.type="checkbox"
   div.appendChild(c)
   let p=document.createElement("p")
   div.appendChild(p)
   p.style.display="inline"
   let d=b.value;
   p.textContent=d
   let button=document.createElement("button")
   button.textContent="delete"
   div.appendChild(button)
   let br=document.createElement("br")
   div.appendChild(br)
  b.value=""
  let count=0;
  c.addEventListener("click",()=>{
   if(count==0)
   {
   p.style.textDecoration="line-through"
   count++
   }
   else if(count==1)
   {
      p.style.textDecoration="none"
      count=0
   }
  })
  button.addEventListener("click",()=>{
   div.style.display="none"
   // c.remove()
   // p.remove()
   // button.remove()

  })
})