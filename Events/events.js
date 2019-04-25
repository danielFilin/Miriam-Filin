
let infoItem = [{
    name: "Journey in Israel",
    description: "It was a great trip during which we encountered few nice people"
}];

console.log(infoItem[infoItem.length-1].name);

let nameInput = document.querySelector("#name");
let descriptionInput = document.querySelector("#description");

const myJSON = JSON.stringify(infoItem);

let container = document.querySelector(".text-container");

document.querySelector(".form-group").addEventListener('submit', (e) => {
    e.preventDefault();
    addInput();
    makeJSON();
    showAll();
})

addInput = () => {
    let newObject = {name: nameInput.value, description: descriptionInput.value};
    infoItem.push(newObject);
}

makeJSON = () =>{
    const myJSON = JSON.stringify(infoItem);
    localStorage.setItem(infoItem[infoItem.length-1].name, myJSON);
    console.log(myJSON);
}

showAll = () => {
        container.innerHTML = "";
        if(localStorage.getItem(!null)){
            myItems = localStorage.getItem(infoItem[infoItem.length-1].name);
            infoItem = JSON.parse(myItems);
        }else {
            makeJSON();
        }
     
        infoItem.forEach(element => {
        let newEvent = document.createElement("p");
        newEvent.className = "my-event";
        let newHeading = document.createElement("h2");
        newHeading.className = "my-event";
        newHeading.innerHTML = element.name + "<br>";
        newEvent.innerHTML += element.description;
        container.appendChild(newHeading);
        container.appendChild(newEvent);
    });
}

showAll();

const singleEvent = document.querySelectorAll(".my-event");

singleEvent.forEach( (event) => {
    event.addEventListener('click', () => {
        event.parentNode.removeChild(event);
        localStorage.removeItem(infoItem[infoItem.length-1].name, event);
    })
})


document.getElementById('onRemove').addEventListener('click', () => {
  
    localStorage.removeItem(infoItem[infoItem.length-1].name);
    infoItem.splice(infoItem[infoItem.length-1].name, 1)
    showAll();
})