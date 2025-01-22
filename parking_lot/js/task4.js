let section=document.getElementById("sec")
let table = document.createElement("table");
section.appendChild(table);
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
let thead = document.createElement("thead");
table.appendChild(thead);
thead.style.border = "1px solid black";
thead.style.borderCollapse = "collapse";
let tr = document.createElement("tr");
thead.appendChild(tr);
tr.style.border = "1px solid black";
tr.style.borderCollapse = "collapse";
let th1 = document.createElement("th");
tr.appendChild(th1);
th1.textContent = "sno";
th1.style.border = "1px solid black";
th1.style.borderCollapse = "collapse";
th1.style.padding="20px"
let th2 = document.createElement("th");
tr.appendChild(th2);
th2.textContent = "Username";
th2.style.border = "1px solid black";
th2.style.borderCollapse = "collapse";
th2.style.padding="20px"
let th3 = document.createElement("th");
tr.appendChild(th3);
th3.textContent = "Bike NO";
th3.style.border = "1px solid black";
th3.style.borderCollapse = "collapse";
th3.style.padding="20px"
let th4 = document.createElement("th");
tr.appendChild(th4);
th4.textContent = "check in";
th4.style.border = "1px solid black";
th4.style.borderCollapse = "collapse";
th4.style.padding="20px"
let th5 = document.createElement("th");
tr.appendChild(th5);
th5.textContent = "check out";
th5.style.border = "1px solid black";
th5.style.borderCollapse = "collapse";
th5.style.padding="20px"
th6 = document.createElement("th");
tr.appendChild(th6);
th6.textContent = "Delete";
th6.style.border = "1px solid black";
th6.style.borderCollapse = "collapse";
th6.style.padding="20px"
let tbody = document.createElement("tbody");
table.appendChild(tbody);
tbody.style.border = "1px solid black";
tbody.style.borderCollapse = "collapse";
let count = 1;
let id=1
let ip1 = document.getElementById("ip1");
let ip2 = document.getElementById("ip2");
let ip3 = document.getElementById("ip3");
let ip4 = document.getElementById("ip4");
let div = document.getElementById("main");
let smt = document.getElementById("smt");
// let tr1=document.createElement("tr")
//     tbody.appendChild(tr1)
//     tr1.style.border="1px solid black";
//     tr1.addEventListener("click",(element)=>{
//        let c=element.currentTarget
//          console.log(c);
//     })
smt.addEventListener("click", () => {
  let tr1 = document.createElement("tr");
  tbody.appendChild(tr1);
  tr1.style.border = "1px solid black";
  tr1.addEventListener("click", (element) => {
    if(id==1)
    {
        element.currentTarget
        console.log(id);
    }
    else if(id==2)
    {
        element.currentTarget.remove()
        console.log(id);
        id=1
        d()
    }
  });
  if (ip1.value != "" && ip2.value != "" && ip3.value != "" && ip4.value != "")
    for (j = 0; j <= 5; j++) {
      let td = document.createElement("td");
      td.style.border = "1px solid black";
      td.style.borderCollapse = "collapse";
      td.style.padding="20px"
      if (j == 0) {
        td.textContent = count;
        tr1.appendChild(td);
        count++;
      } else if (j == 1) {
        td.textContent = ip1.value;
        tr1.appendChild(td);
      } else if (j == 2) {
        td.textContent = ip2.value;
        tr1.appendChild(td);
      } else if (j == 3) {
        td.textContent = ip3.value;
        tr1.appendChild(td);
      } else if (j == 4) {
        td.textContent = ip4.value;
        tr1.appendChild(td);
      } else if (j == 5) {
        let button = document.createElement("button");
        button.textContent = "delete";
        td.appendChild(button);
        tr1.appendChild(td);
        button.addEventListener("click", (element) => {
            element.currentTarget
            id++
           console.log(count);
        //   let c = element.currentTarget;
        //   c.id = "btn";
        //   c = document.getElementById("btn");
          console.log(id);
          // tr1.remove()
        });
      }
    }
  ip1.value = "";
  ip2.value = "";
  ip3.value = "";
  ip4.value = "";
});

function d()
{
  let s=document.querySelectorAll("tr")
  for(i=1;i<=s.length;i++)
  {
  let f=s[i]
  f.children[0].textContent=i
  }
}
