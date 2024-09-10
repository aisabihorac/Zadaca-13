function addParagraph() {
   
    var element = document.createElement('p');

    element.textContent = "Ovo je novi paragraf!";
    

    document.body.appendChild(element);
}


addParagraph();
//Drugi  zadatak
function addButton() {
    let button = document.createElement('button');
    button.textContent = "Klikni me";
    document.getElementById('buttonContainer').appendChild(button);
}

addButton();
