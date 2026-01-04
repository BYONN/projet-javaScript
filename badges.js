let datatable = JSON.parse(localStorage.getItem('appData'));

let badges = datatable.badges;
let currentuser = datatable.currentUser;

if (!currentuser) {
    window.location.href = "login.html";
}

let usernameDisplay = document.getElementById("usernamecourant");


usernameDisplay.innerText = currentuser.username

if (currentuser.role === "User") {
    document.querySelectorAll(".restricted").forEach(element => {
        element.remove();
    })
}

function exportPDF() {
    let element = document.getElementById("tableau-pdf");
    html2pdf(element);
}

function supprimerBadge(id) {
    if (confirm("Vous êtes sur que vous voulez supprimer ce badge?")) {
        badges = badges.filter(badge => badge.id !== id);
        datatable.badges = badges;
        localStorage.setItem('appData', JSON.stringify(datatable));
        location.reload();
    }
}

function insererBadges() {
    let tabbadges = document.getElementById("badges-table");



    badges.forEach(badge => {
        if (currentuser.role === "User" && currentuser.badges.includes(badge.id) || currentuser.role === "Admin") {
            let row = tabbadges.insertRow();
            let cell1 = document.createElement("th");

            cell1.scope = "row";
            row.appendChild(cell1);

            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            cell1.innerHTML = badge.id;
            cell2.innerHTML = badge.name;
            cell3.innerHTML = badge.minWpm;
            cell4.innerHTML = badge.description;
            if (currentuser.role == "Admin") {
                cell5.innerHTML = `<button class="btn btn-sm btn-warning me-2" onclick="modifierFormulaire(${badge.id})" data-i18n="btnModify">Modifier</button><button class="btn btn-sm btn-danger" onclick="supprimerBadge(${badge.id})" data-i18n="btnDelete">Supprimer</button>`;
            }
        }
    });
}


function ajouterBadge() {
    let newname = document.getElementById("nom").value;
    let newminWpm = document.getElementById("minWpm").value;
    let newdescription = document.getElementById("description").value;
    let newBadge = {
        id: badges.length + 1,
        name: newname,
        minWpm: newminWpm,
        description: newdescription
    };

    badges.push(newBadge);
    datatable.badges = badges;
    localStorage.setItem('appData', JSON.stringify(datatable));

    let page = document.getElementById("page");
    page.innerHTML = "<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Badge ajouté avec succès!</h4></div>";
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function modifierBadge(id) {
    let newname = document.getElementById("nom").value;
    let newminWpm = document.getElementById("minWpm").value;
    let newdescription = document.getElementById("description").value;
    let badge = badges.find(b => b.id === id);
    badge.name = newname;
    badge.minWpm = newminWpm;
    badge.description = newdescription;
    datatable.badges = badges;
    localStorage.setItem('appData', JSON.stringify(datatable));

    let page = document.getElementById("page");

    page.innerHTML = "<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Badge modifié avec succès!</h4></div>";
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function modifierFormulaire(id) {
    let badge = badges.find(badge => badge.id === id);
    let page = document.getElementById("page");
    page.innerHTML = "<div class='w-75 p-3 bg-light rounded' style='height: 70vh;'>\
    <h1 class='mb-2 text-black' data-i18n='modifyBadge'>Modifier le badge</h1>\
     <form>\
        <fieldset>\
    <label for='nom' class='mt-4 col-form-label text-black' data-i18n='name'>Nom</label> <br>\
    <input type='text' class='form-control' id='nom' required value='"+ badge.name + "'>\
    <label for='minWpm' class='mt-4 col-form-label text-black' data-i18n='wpmRequired'>MPM requis</label> <br>\
    <input type='number' class='form-control' id='minWpm' required value='"+ badge.minWpm + "'>\
    <label for='description' class='mt-4 col-form-label text-black' data-i18n='description'>Description</label> <br>\
    <input type='text' class='form-control' id='description' required value='"+ badge.description + "'>\
    <br> \
    <button type='submit' class='btn btn-primary' onclick='modifierBadge("+ id + ")'>Modifier</button>\
    </fieldset>\
    </form>\
    </div>";
}


function ajouterBadgeFormulaire() {
    let page = document.getElementById("page");
    page.innerHTML = "<div class='w-75 p-3 bg-light rounded' style='height: 70vh;'>\
    <h1 class='mb-2 text-black'>Ajouter un badge</h1>\
     <form>\
        <fieldset>\
    <label for='nom' class='mt-4 col-form-label text-black' data-i18n='name'>Nom</label> <br>\
    <input type='text' class='form-control' id='nom' required>\
    <label for='minWpm' class='mt-4 col-form-label text-black' data-i18n='wpmRequired'>MPM requis</label> <br>\
    <input type='number' class='form-control' id='minWpm' required>\
    <label for='description' class='mt-4 col-form-label text-black' data-i18n='description'>Description</label> <br>\
    <input type='text' class='form-control' id='description' required>\
    <br> \
    <button type='submit' class='btn btn-primary' onclick='ajouterBadge()'>Ajouter</button>\
    </fieldset>\
    </form>\
    </div>";
}

insererBadges();