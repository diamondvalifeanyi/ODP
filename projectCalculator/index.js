const display = document.querySelector('.display')
const del = document.querySelector(".del")
const allClear = document.querySelector('.ac')
const point = document.querySelector(".point")
const divide = document.querySelector('.divide')
const mult = document.querySelector(".mult")
const sub = document.querySelector('.sub')
const add = document.querySelector(".add")
const zero = document.querySelector('.span-1')
const equalTo = document.querySelector(".span-2")
const screenPick = document.querySelectorAll(".previous, .current")
// const screenPick2 = document.querySelector(".previous")

const pickFrom = Array.from(screenPick)

//     allClear.addEventListener('click', function() {
//     const addUp = document.createElement("p");
//     addUp.textContent = "10";
//     const myText = addUp.textContent;
//     // addUp.style.color = " rgba(2, 92, 87, 0.99)"
//     addUp.style.marginLeft = "90px"
//     addUp.style.marginTop = "55px"
//     pickFrom.appendChild(addUp);
// })

// allClear.addEventListener('click', function() {
//     // Loop through each element in pickFrom array
//     pickFrom.forEach(element => {
//         const addUp = document.createElement("p");
//         addUp.textContent = "10";
//         const myText = addUp.textContent;
//         // addUp.style.color = " rgba(2, 92, 87, 0.99)"
//         addUp.style.marginLeft = "90px";
//         addUp.style.marginTop = "55px";
//         element.appendChild(addUp); // Append to current element in loop
//     });
// });

// mult.addEventListener('click', ()=> {
//     display.innerHTML = mult.innerHTML;
// })