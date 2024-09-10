function addParagraph() {
   
    var element = document.createElement('p');

    element.textContent = "Ovo je novi paragraf!";
    

    document.body.appendChild(element);
}


addParagraph();