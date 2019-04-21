

const userInput = document.querySelector('textarea');
const ul = document.querySelector(".userText");

document.getElementById('new-fact').addEventListener( 'click', () => {
    const newEl = document.createElement("li");
    newEl.innerHTML = userInput.value;
    ul.appendChild(newEl);
})