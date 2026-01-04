let datatable = JSON.parse(localStorage.getItem('appData'));

let rapports = datatable.reports;
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

function resoudreRapport(id) {
    if (confirm("Vous êtes sur que vous voulez resoudre ce rapport?")) {
        let rapport = rapports.find(r => r.id === id);
        rapport.status = "Resolu";
        datatable.rapports = rapports;
        localStorage.setItem('appData', JSON.stringify(datatable));
        location.reload();
    }
}

function insererRapports() {
    let tabrapports = document.getElementById("rapports-table");

    rapports.forEach(rapport => {
        let row = tabrapports.insertRow();
        let cell1 = document.createElement("th");

        cell1.scope = "row";
        row.appendChild(cell1);

        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = rapport.id;
        cell2.innerHTML = rapport.userId;
        cell3.innerHTML = rapport.message;
        cell4.innerHTML = rapport.status;
        if (rapport.status === "Ouvert") {
        cell5.innerHTML = `<button class="btn btn-sm btn-success" onclick="resoudreRapport(${rapport.id})" data-i18n="btnResolve">Resoudre</button>`;
        }
    });
}



insererRapports();