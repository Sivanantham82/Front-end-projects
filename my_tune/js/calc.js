let num1 = document.getElementById("ip1");
let num2 = document.getElementById("ip2");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

let div1 = document.getElementById("main2");
let div2 = document.getElementById("main3");

btn1.addEventListener("click", () => {
  let sum = Number(num1.value) + Number(num2.value);
  console.log(sum);
  div2.style.display = "block";
  div1.style.display = "block";
  let restart = document.getElementById("restart");
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  document.getElementById("para").textContent = `your result is :${sum}`;
});
btn2.addEventListener("click", () => {
  let sub = Number(num1.value) - Number(num2.value);
  console.log(sub);
  div2.style.display = "block";
  div1.style.display = "block";
  let restart = document.getElementById("restart");
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  document.getElementById("para").textContent = `your result is :${sub}`;
});
btn3.addEventListener("click", () => {
  let Mul = Number(num1.value) * Number(num2.value);
  console.log(Mul);
  div2.style.display = "block";
  div1.style.display = "block";
  let restart = document.getElementById("restart");
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  document.getElementById("para").textContent = `your result is :${Mul}`;
});
btn4.addEventListener("click", () => {
  let Div = Number(num1.value) / Number(num2.value);
  console.log(Div);
  div2.style.display = "block";
  div1.style.display = "block";
  let restart = document.getElementById("restart");
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  document.getElementById("para").textContent = `your result is :${Div}`;
});
btn5.addEventListener("click", () => {
  let Mod = Number(num1.value) % Number(num2.value);
  console.log(Mod);
  div2.style.display = "block";
  div1.style.display = "block";
  let restart = document.getElementById("restart");
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  document.getElementById("para").textContent = `your result is :${Mod}`;
});
