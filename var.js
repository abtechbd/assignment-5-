document.getElementById("dateTime").innerHTML = new Date().toDateString();

document.getElementById("btn1").addEventListener("click", function () {
  alert("Board Updated Successfully");

  //  decrease number
  const decrease = document.getElementById("decrease").innerText;

  const conDecrease = parseFloat(decrease);

  let sum1 = conDecrease - 1;

  document.getElementById("decrease").innerText = sum1;

  //  increase number

  const increase = document.getElementById("increase").innerText;

  const conIncrease = parseFloat(increase);

  let sum2 = conIncrease + 1;

  document.getElementById("increase").innerText = sum2;

  const head1 = document.getElementById("head1");
  const history = document.getElementById("history");
  const element = document.createElement("p");
  const currentDate = new Date().toLocaleTimeString();
  const btn1 = document.getElementById("btn1");
  element.classList.add("bg-slate-200", "p-2", "rounded-2xl", "my-4");

  element.innerText =
    "You have Complete The Task " + head1.innerText + " at " + currentDate;

  history.appendChild(element);
  btn1.disabled = true;
  btn1.classList.add("bg-slate-200", "text-gray-600");
});

// button 2 function create*******************

document.getElementById("btn2").addEventListener("click", function () {
  alert("Board Updated Successfully");

  //  decrease number
  const decrease = document.getElementById("decrease").innerText;

  const conDecrease = parseFloat(decrease);

  let sum1 = conDecrease - 1;

  document.getElementById("decrease").innerText = sum1;

  //  increase number

  const increase = document.getElementById("increase").innerText;

  const conIncrease = parseFloat(increase);

  let sum2 = conIncrease + 1;

  document.getElementById("increase").innerText = sum2;

  const head1 = document.getElementById("head2");
  const history = document.getElementById("history");
  const element = document.createElement("p");
  const currentDate = new Date().toLocaleTimeString();
  const btn2 = document.getElementById("btn2");
  element.classList.add("bg-slate-200", "p-2", "rounded-2xl", "my-4");

  element.innerText =
    "You have Complete The Task " + head2.innerText + " at " + currentDate;

  history.appendChild(element);
  btn2.disabled = true;
  btn2.classList.add("bg-slate-200", "text-gray-600");
});

// button 3 function create*******************

document.getElementById("btn3").addEventListener("click", function () {
  alert("Board Updated Successfully");

  //  decrease number
  const decrease = document.getElementById("decrease").innerText;

  const conDecrease = parseFloat(decrease);

  let sum1 = conDecrease - 1;

  document.getElementById("decrease").innerText = sum1;

  //  increase number

  const increase = document.getElementById("increase").innerText;

  const conIncrease = parseFloat(increase);

  let sum2 = conIncrease + 1;

  document.getElementById("increase").innerText = sum2;

  const head3 = document.getElementById("head3");
  const history = document.getElementById("history");
  const element = document.createElement("p");
  const currentDate = new Date().toLocaleTimeString();
  const btn3 = document.getElementById("btn3");
  element.classList.add("bg-slate-200", "p-2", "rounded-2xl", "my-4");

  element.innerText =
    "You have Complete The Task " + head3.innerText + " at " + currentDate;

  history.appendChild(element);
  btn3.disabled = true;
  btn3.classList.add("bg-slate-200", "text-gray-600");
});

// button 4 function create*******************

document.getElementById("btn4").addEventListener("click", function () {
  alert("Board Updated Successfully");

  //  decrease number
  const decrease = document.getElementById("decrease").innerText;

  const conDecrease = parseFloat(decrease);

  let sum1 = conDecrease - 1;

  document.getElementById("decrease").innerText = sum1;

  //  increase number

  const increase = document.getElementById("increase").innerText;

  const conIncrease = parseFloat(increase);

  let sum2 = conIncrease + 1;

  document.getElementById("increase").innerText = sum2;

  const head4 = document.getElementById("head4");
  const history = document.getElementById("history");
  const element = document.createElement("p");
  const currentDate = new Date().toLocaleTimeString();
  const btn4 = document.getElementById("btn4");
  element.classList.add("bg-slate-200", "p-2", "rounded-2xl", "my-4");

  element.innerText =
    "You have Complete The Task " + head4.innerText + " at " + currentDate;

  history.appendChild(element);
  btn4.disabled = true;
  btn4.classList.add("bg-slate-200", "text-gray-600");
});

// button 5 function create*******************

document.getElementById("btn5").addEventListener("click", function () {
  alert("Board Updated Successfully");

  //  decrease number
  const decrease = document.getElementById("decrease").innerText;

  const conDecrease = parseFloat(decrease);

  let sum1 = conDecrease - 1;

  document.getElementById("decrease").innerText = sum1;

  //  increase number

  const increase = document.getElementById("increase").innerText;

  const conIncrease = parseFloat(increase);

  let sum2 = conIncrease + 1;

  document.getElementById("increase").innerText = sum2;

  const head5 = document.getElementById("head5");
  const history = document.getElementById("history");
  const element = document.createElement("p");
  const currentDate = new Date().toLocaleTimeString();
  const btn5 = document.getElementById("btn5");
  element.classList.add("bg-slate-200", "p-2", "rounded-2xl", "my-4");

  element.innerText =
    "You have Complete The Task " + head5.innerText + " at " + currentDate;

  history.appendChild(element);
  btn5.disabled = true;
  btn5.classList.add("bg-slate-200", "text-gray-600");
});

// button 6 function create*******************

document.getElementById("btn6").addEventListener("click", function () {
  alert("Board Updated Successfully");
  alert("congrates!!! You have completed all the current task");

  //  decrease number
  const decrease = document.getElementById("decrease").innerText;

  const conDecrease = parseFloat(decrease);

  let sum1 = conDecrease - 1;

  document.getElementById("decrease").innerText = sum1;

  //  increase number

  const increase = document.getElementById("increase").innerText;

  const conIncrease = parseFloat(increase);

  let sum2 = conIncrease + 1;

  document.getElementById("increase").innerText = sum2;

  const head6 = document.getElementById("head6");
  const history = document.getElementById("history");
  const element = document.createElement("p");
  const currentDate = new Date().toLocaleTimeString();
  const btn6 = document.getElementById("btn6");
  element.classList.add("bg-slate-200", "p-2", "rounded-2xl", "my-4");

  element.innerText =
    "You have Complete The Task " + head6.innerText + " at " + currentDate;

  history.appendChild(element);
  btn6.disabled = true;
  btn6.classList.add("bg-slate-200", "text-gray-600");
});

//   clear History Function()***********

document.getElementById("cln").addEventListener("click", function () {
  const history = document.getElementById("history");

  history.innerText = "";
});

const colors = ["red", "blue", "yellow", "green", "black"];

document.getElementById("bg-btn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

document.getElementById("link-box").addEventListener("click", function () {
  window.location.href = "link.html";
});
