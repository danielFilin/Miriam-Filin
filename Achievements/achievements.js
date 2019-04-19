

// document.getElementById("first-btn").addEventListener( "click", () => {
//     myItems.forEach( (item, i) => {
//         item.innerHTML = newItems[i];
//         picturePick.style.color = "blue";

//     })
// })

// let num = -1;
// const result = todos.filter( (todo) => {
//     if(todo.status){
//         num++;
//         const wordy = document.createElement("p");
//         wordy.className = "list-item-added"
//         wordy.textContent = newItems[num];
//         document.querySelector("body").appendChild(wordy);
  
//     }
  
//     return todo.status; 
//     }
// );

const myInput = document.querySelector(".enjoy-input"); 
const textInput = document.querySelector(".css-input");

document.querySelector('.myBtn').addEventListener( 'click', (e) => {
    const newElement = document.createElement('img');
    const newText = document.createElement("p");
    newElement.src = myInput.value; 
    newText.className ="myClass_text";
    newText.innerHTML = textInput.value;

    newElement.className = "generatedEl";
    document.querySelector('.manager').appendChild(newText);
    document.querySelector('.manager').appendChild(newElement);
    myInput.value = "";
    textInput.value = "";
})