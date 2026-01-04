let datatable = JSON.parse(localStorage.getItem('appData'));

let users = datatable.users;
let currentuser = datatable.currentUser;

if (!currentuser){
    window.location.href = "login.html";
}

if (currentuser.role != "Admin"){
    window.location.href = "scores.html";
}



let usernameDisplay = document.getElementById("usernamecourant");


usernameDisplay.innerText = currentuser.username

function exportPDF(){
    let element = document.getElementById("tableau-pdf");
    html2pdf(element);
}
function supprimerUtilisateur(id) {
    if (confirm("Vous êtes sur que vous voulez supprimer cet utilisateur?")) {
        users = users.filter(user => user.id !== id);
        datatable.users = users;
        localStorage.setItem('appData', JSON.stringify(datatable));
        location.reload();
    }
}

function insererUtilisateurs() {
    let tabusers = document.getElementById("users-table");

    users.forEach(user => {
        let row = tabusers.insertRow();
        let cell1 = document.createElement("th");

        cell1.scope = "row";
        row.appendChild(cell1);

        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = user.id;
        cell2.innerHTML = user.username;
        cell3.innerHTML = user.nationality;
        cell4.innerHTML = user.role;
        cell5.innerHTML = `<button class="btn btn-sm btn-warning me-2" onclick="modifierFormulaire(${user.id})" data-i18n="btnModify">Modifier</button><button class="btn btn-sm btn-danger" onclick="supprimerUtilisateur(${user.id})" data-i18n="btnDelete">Supprimer</button>`;
    });
}


function ajouterUtilisateur() {
    let newusername = document.getElementById("username").value;
    let newpassword = document.getElementById("password").value
    let newnationality = document.getElementById("nationality").value;
    let newrole = document.getElementById("role").value;
    let newUser = {
        id: users.length + 1,
        username: newusername,
        password: newpassword,
        nationality: newnationality,
        role: newrole,
        badges: {}
    };
    users.push(newUser);
    datatable.users = users;
    localStorage.setItem('appData', JSON.stringify(datatable));
    let page = document.getElementById("page");
    page.innerHTML = "<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Utilisateur ajouté avec succès!</h4></div>";
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function modifierUtilisateur(id){
    let newusername = document.getElementById("username").value;
    let newnationality = document.getElementById("nationality").value;
    let newrole = document.getElementById("role").value;
    let utilisateur = users.find(user => user.id === id);

    utilisateur.username = newusername;
    utilisateur.nationality = newnationality;
    utilisateur.role = newrole;
    datatable.users = users;
    localStorage.setItem('appData', JSON.stringify(datatable));

    let page = document.getElementById("page");

    page.innerHTML = "<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Utilisateur modifié avec succès!</h4></div>";
    setTimeout(() => {
        location.reload();
    }, 2000);
}
function modifierFormulaire(id){
    let utilisateur = users.find(user => user.id === id);
    let page = document.getElementById("page");
    page.innerHTML = "<div class='w-75 p-3 bg-light rounded' style='height: 70vh;'>\
    <h1 class='mb-2 text-black'>Modifier l'utilisateur</h1>\
     <form>\
        <fieldset>\
    <label for='username' class='mt-4 col-form-label text-black'>Nom d'utilisateur</label> <br>\
    <input type='text' class='form-control' id='username' required value='"+ utilisateur.username +"'>\
    <label for='nationality' class='mt-4 col-form-label text-black'>Nationalité</label> <br>\
    <input type='text' class='form-control' id='nationality' required value='"+ utilisateur.nationality +"'>\
    <label for='role' class='mt-4 col-form-label text-black'>Rôle</label> <br>\
    <select class='form-select' id='role' required>\
    <option value='User'" + (utilisateur.role === 'User' ? 'selected' : '') + ">Utilisateur</option>\
    <option value='Admin'" + (utilisateur.role === 'Admin' ? 'selected' : '') + ">Admin</option>\
    </select> <br> \
    <button type='submit' class='btn btn-primary' onclick='modifierUtilisateur("+id+")'>Modifier</button>\
    </fieldset>\
    </form>\
    </div>";
}


function ajouterUtilisateurFormulaire() {
    let page = document.getElementById("page");
    page.innerHTML = "<div class='w-75 p-3 bg-light rounded' style='height: 90vh;'>\
    <h1 class='mb-2 text-black'>Ajouter un utilisateur</h1>\
     <form>\
        <fieldset>\
    <label for='username' class='mt-4 col-form-label text-black'>Nom d'utilisateur</label> <br>\
    <input type='text' class='form-control' id='username' required>\
    <label for='password' class='mt-4 col-form-label text-black'>Mot de passe</label> <br>\
    <input type='password' class='form-control' id='password' required>\
    <label for='nationality' class='mt-4 col-form-label text-black'>Nationalité</label> <br>\
    <input type='text' class='form-control' id='nationality' required>\
    <label for='role' class='mt-4 col-form-label text-black'>Rôle</label> <br>\
    <select class='form-select' id='role' required>\
    <option value='User'>Utilisateur</option>\
    <option value='Admin'>Admin</option>\
    </select> <br> \
    <button type='submit' class='btn btn-primary' onclick='ajouterUtilisateur()'>Ajouter</button>\
    </fieldset>\
    </form>\
    </div>";
}

insererUtilisateurs();