
// document.querySelector('.myBtn').addEventListener( 'click', (e) => {
//     const newElement = document.createElement('img');
//     const newText = document.createElement("p");
//     newElement.src = myInput.value; 
//     newText.className ="myClass_text";
//     newText.innerHTML = textInput.value;

//     newElement.className = "generatedEl";
//     document.querySelector('.manager').appendChild(newText);
//     document.querySelector('.manager').appendChild(newElement);
//     myInput.value = "";
//     textInput.value = "";
// })

const inputText = document.getElementById("comment");
const inputTitle = document.querySelector("#photo-title");
const place = document.getElementById("place");
const photoName = document.getElementById('file-name');
let condition = true; 

document.querySelector('.photo-upload-form').addEventListener('submit', (e) =>{
    e.preventDefault();

    const body = document.createElement('div');
    body.className = "card";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    body.appendChild(cardBody);

    const title = document.createElement('h4');
    title.innerHTML = inputTitle.value;
    title.className = "card-title";
    cardBody.appendChild(title);

    const image = document.createElement("img");
    if(condition) {
        image.className = "card-photo float-right";
        condition = false;
    }else {
        image.className = "card-photo float-left";
        condition = true;
    }
  
    image.src = photoName.value;
    console.log(image.src);
    cardBody.appendChild(image);

    const infoText = document.createElement('p');
    if (condition){
        infoText.className = "card-text float-right";
    }else {
        infoText.className = "card-text";
    }
   
    infoText.innerHTML = inputText.value;
    cardBody.appendChild(infoText);

    const photoPlace = document.createElement("h5");
    photoPlace.innerHTML = "Место фотографии: "
    photoPlace.innerHTML += place.value; 
    if (condition){
        photoPlace.className = "card-place float-right";
    } else {
        photoPlace.className = "card-place";
    }
  
    cardBody.appendChild(photoPlace);

    document.querySelector('.photo-container').appendChild(body);
    
})