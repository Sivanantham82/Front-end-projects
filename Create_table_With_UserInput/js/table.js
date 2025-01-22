
let table=document.createElement("table")
document.body.append(table)
table.style.border="1px solid black";
table.style.borderCollapse="collapse"
let thead=document.createElement("thead")
table.appendChild(thead)
thead.style.border="1px solid black";
thead.style.borderCollapse="collapse"
let tr=document.createElement("tr")
thead.appendChild(tr)
tr.style.border="1px solid black";
tr.style.borderCollapse="collapse"
let th1=document.createElement("th")
tr.appendChild(th1)
th1.textContent="sno"
th1.style.border="1px solid black";
th1.style.borderCollapse="collapse"
let th2=document.createElement("th")
tr.appendChild(th2)
th2.textContent="Empname"
th2.style.border="1px solid black";
th2.style.borderCollapse="collapse"
let th3=document.createElement("th")
tr.appendChild(th3)
th3.textContent="Emplocation"
th3.style.border="1px solid black";
th3.style.borderCollapse="collapse"
let tbody=document.createElement("tbody")
table.appendChild(tbody)
tbody.style.border="1px solid black";
tbody.style.borderCollapse="collapse"
let uservalue=prompt("how many data you enter:")
for(i=1;i<=(Number(uservalue));i++)
{
    let tr1=document.createElement("tr")
    tbody.appendChild(tr1)
    tr1.style.border="1px solid black";
    for(j=0;j<3;j++)
    {
        let td=document.createElement("td")
        // td.textContent=prompt("enter data :")
        td.style.border="1px solid black"; 
        td.style.borderCollapse="collapse"
        if(j==0)
        {
            td.textContent=i;
            tr1.appendChild(td)
        }
        else if(j==1)
        { 
            td.textContent=prompt("enter ename")
            if(td.textContent!="")
            {
              tr1.appendChild(td)
            }
            else
            {
                j--
            }
        }
        else
        {
              td.textContent=prompt("enter location")
              if(td.textContent != "")
              {
              tr1.appendChild(td)
              }
              else
              {
                j--
              }
        }
    }
}
