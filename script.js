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
//Treci zadatak
function createList() {

    let ul = document.createElement('ul');

  
    for (let i = 1; i <= 3; i++) {
        let li = document.createElement('li'); 
        li.textContent = "Stavka " + i; 
        ul.appendChild(li);
    }
      document.getElementById('listContainer').appendChild(ul);
}
createList();
//Cetvrti zadatak
function insertHTML() {

    var html = `
        <p>Ovo je paragraf ubačen iz JavaScript-a.</p>
        <button>Klikni ovdje</button>
    `;
     document.getElementById('contentContainer').innerHTML = html;
}


insertHTML();

