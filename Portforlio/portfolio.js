document.addEventListener('DOMContentLoaded', () => {
    const workDiv = document.querySelector('.work');
    const infoDiv = document.querySelector('.info');
    const toggleDiv = document.querySelector('.toggle');
    const toggle2Div = document.querySelector('.toggle2');
    const indicator = document.querySelector('.indicator');

    workDiv.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        toggleDiv.style.display = 'flex'; // Show the toggle div
        toggle2Div.style.display = 'none'; // Hide the other toggle div
        indicator.style.left = '5%'; // Move the indicator to the first position
    });

    infoDiv.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        toggle2Div.style.display = 'flex'; // Show the toggle2 div
        toggleDiv.style.display = 'none'; // Hide the other toggle div
        indicator.style.left = '55%'; // Move the indicator to the second position
    });
});
