let datatable = JSON.parse(localStorage.getItem('appData'));

let texts = datatable.texts;
let currentuser = datatable.currentUser;

if (!currentuser){
    window.location.href = "login.html";
}

if (currentuser.role != "Admin"){
    window.location.href = "scores.html";
}

let usernameDisplay = document.getElementById("usernamecourant");


usernameDisplay.innerText = currentuser.username

function supprimerTexte(id) {
    if (confirm("Vous êtes sur que vous voulez supprimer ce texte?")) {
        texts = texts.filter(text => text.id !== id);
        datatable.texts = texts;
        localStorage.setItem('appData', JSON.stringify(datatable));
        location.reload();
    }
}

function insererTexts() {
    let tabtexts = document.getElementById("texts-table");

    texts.forEach(text => {
        let row = tabtexts.insertRow();
        let cell1 = document.createElement("th");

        cell1.scope = "row";
        row.appendChild(cell1);

        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        cell1.innerHTML = text.id;
        cell2.innerHTML = text.content;
        cell3.innerHTML = text.language;
        cell4.innerHTML = text.difficulty;
        cell5.innerHTML = text.category;
        cell6.innerHTML = `<button class="btn btn-sm btn-warning me-2" onclick="modifierFormulaire(${text.id})" data-i18n="btnModify">Modifier</button><button class="btn btn-sm btn-danger" onclick="supprimerTexte(${text.id})" data-i18n="btnDelete">Supprimer</button>`;
    });
}


function ajouterTexte() {
    console.log("teste");
    let newcontent = document.getElementById("contenu").value;
    let newlanguage = document.getElementById("langage").value;
    let newdifficulty = document.getElementById("difficulte").value;
    let newcategory = document.getElementById("categorie").value;
    let newText = {
        id: texts.length + 1,
        content: newcontent,
        language: newlanguage,
        difficulty: newdifficulty,
        category: newcategory
    };

    texts.push(newText);
    datatable.texts = texts;
    localStorage.setItem('appData', JSON.stringify(datatable));

    let page = document.getElementById("page");
    page.innerHTML = "<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Texte ajouté avec succès!</h4></div>";
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function modifierTexte(id){
    let newcontent = document.getElementById("contenu").value;
    let newlanguage = document.getElementById("langage").value;
    let newdifficulty = document.getElementById("difficulte").value;
    let newcategory = document.getElementById("categorie").value;
    let texte = texts.find(text => text.id === id);
    texte.content = newcontent;
    texte.language = newlanguage;
    texte.difficulty = newdifficulty;
    texte.category = newcategory;
    datatable.texts = texts;
    localStorage.setItem('appData', JSON.stringify(datatable));

    let page = document.getElementById("page");

    page.innerHTML = "<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Texte modifié avec succès!</h4></div>";
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function modifierFormulaire(id){
    let texte = texts.find(text => text.id === id);
    let page = document.getElementById("page");
    page.innerHTML = "<div class='w-75 p-3 bg-light rounded' style='height: 70vh;'>\
    <h1 class='mb-2 text-black'>Modifier le texte</h1>\
     <form>\
        <fieldset>\
    <label for='contenu' class='mt-4 col-form-label text-black'>Contenu</label> <br>\
    <input type='text' class='form-control' id='contenu' required value='"+ texte.content +"'>\
    <label for='difficulte' class='mt-4 col-form-label text-black'>Difficulté</label> <br>\
    <input type='text' class='form-control' id='difficulte' required value='"+ texte.difficulty +"'>\
    <label for='categorie' class='mt-4 col-form-label text-black'>Catégorie</label> <br>\
    <input type='text' class='form-control' id='categorie' required value='"+ texte.category +"'>\
    <label for='langage' class='mt-4 col-form-label text-black'>Langage</label> <br>\
    <select class='form-select' id='langage' required>\
    <option value='fr'" + (texte.language === 'fr' ? " selected" : "") + ">Français</option>\
    <option value='en'" + (texte.language === 'en' ? " selected" : "") + ">English</option>\
    <option value='ar'" + (texte.language === 'ar' ? " selected" : "") + ">العربية</option>\
    </select> <br> \
    <button type='submit' class='btn btn-primary' onclick='modifierTexte("+id+")'>Modifier</button>\
    </fieldset>\
    </form>\
    </div>";
}


function ajouterTexteFormulaire() {
    let page = document.getElementById("page");
    page.innerHTML = "<div class='w-75 p-3 bg-light rounded' style='height: 90vh;'>\
    <h1 class='mb-2 text-black'>Ajouter un texte</h1>\
     <form>\
        <fieldset>\
    <label for='contenu' class='mt-4 col-form-label text-black'>Contenu</label> <br>\
    <input type='text' class='form-control' id='contenu' required>\
    <label for='difficulte' class='mt-4 col-form-label text-black'>Difficulté</label> <br>\
    <input type='text' class='form-control' id='difficulte' required>\
    <label for='categorie' class='mt-4 col-form-label text-black'>Catégorie</label> <br>\
    <input type='text' class='form-control' id='categorie' required>\
    <label for='langage' class='mt-4 col-form-label text-black'>Langage</label> <br>\
    <select class='form-select' id='langage' required>\
    <option value='fr'>Français</option>\
    <option value='en'>English</option>\
    <option value='ar'>العربية</option>\
    </select> <br> \
    <button type='submit' class='btn btn-primary' onclick='ajouterTexte()'>Ajouter</button>\
    </fieldset>\
    </form>\
    </div>";
}

insererTexts();