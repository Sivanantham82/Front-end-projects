let a5=document.getElementById("a5")
let mydiv=document.getElementById("mydiv")
let login=document.getElementById("login")
let close=document.getElementById("close")
let a1=document.getElementById("mov1")
let b1=document.getElementById("mov2")
let c1=document.getElementById("mov3")
let h2=document.getElementById("head2")
let click="none"
a5.addEventListener("click",()=>
{
    if (click=="none") {
         mydiv.style.display="block"
         click="block"
    }
    else 
    {
         mydiv.style.display="none"
         click="none"
    }
})
let main=document.getElementById("main2")
main.addEventListener("click",()=>{
    mydiv.style.display="none"
})
mydiv.addEventListener("click",()=>{
  login.style.translate="0px 490px"
  login.style.transition="2s"
})
close.addEventListener("click",()=>{
  login.style.translate="0px -510px"
  login.style.transition="0s"
})
for(i=1;i<=50;i++)
{
  let a=document.getElementById(`td${i}`)
  let count=0
  a.addEventListener("click",()=>{
    if(count==0)
    {
       a.style.backgroundColor="green"
       count++
    }
    else if(count==1)
    {
      a.style.backgroundColor="#d6cece"
      count=0
    }

  })
}
for(j=1;j<=50;j++)
  {
    let b=document.getElementById(`t${j}`)
    let count=0
    b.addEventListener("click",()=>{
      if(count==0)
      {
         b.style.backgroundColor="green"
         count++
      }
      else if(count==1)
      {
        b.style.backgroundColor="#d6cece"
        count=0
      }
  
    })
  }

  a1.addEventListener("click",()=>{
    h2.textContent="Kanguva Movie Sets Booking"
  })
  b1.addEventListener("click",()=>{
    h2.textContent="Lucky Basker Movie Sets Booking"
  })
  c1.addEventListener("click",()=>{
    h2.textContent="Amaran Movie Sets Booking"
  })