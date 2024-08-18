// your JavaScript file
var container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// const pContainer = document.querySelector("#container");

const addUp = document.createElement("p");
addUp.classList.add("addUp");
addUp.textContent = "hey i'm red";
addUp.style.color = "red";
container.appendChild(addUp);

const newH3 = document.createElement("h3");
newH3.textContent = "i'm a blue h3";
newH3.style.color = "blue";
container.appendChild(newH3);

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.width = "25%";
// newDiv.style.height = "80px";
newDiv.style.border = "1px solid black";
newDiv.textContent = " i just created a new div"
container.appendChild(newDiv);

const newH1 = document.createElement("h1");
newH1.textContent = "i'm in a div";
newH1.style.color = "green";
newDiv.appendChild(newH1);

const newHP = document.createElement("p");
newHP.textContent = "and me too";
newHP.style.color = "purple";
newDiv.appendChild(newHP);

// the JavaScript file
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// the JavaScript file
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector("#btn");
  
  // METHOD 2
//   btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

  