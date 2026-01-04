let datatable = JSON.parse(localStorage.getItem('appData'));

let scores = datatable.scores;
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

function supprimerScore(id) {
    if (confirm("Vous êtes sur que vous voulez supprimer ce score?")) {
        scores = scores.filter(score => score.id !== id);
        datatable.scores = scores;
        localStorage.setItem('appData', JSON.stringify(datatable));
        location.reload();
    }
}

function insererScores() {
    let tabscores = document.getElementById("scores-table");

    if (currentuser.role === "User") {
        scores = scores.filter(score => score.userId === currentuser.id);
    }


    scores.forEach(score => {
        let row = tabscores.insertRow();
        let cell1 = document.createElement("th");

        cell1.scope = "row";
        row.appendChild(cell1);

        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        cell1.innerHTML = score.id;
        cell2.innerHTML = score.userId;
        cell3.innerHTML = score.textId;
        cell4.innerHTML = score.wpm;
        cell5.innerHTML = score.accuracy;
        cell6.innerHTML = score.date
        if (currentuser.role == "Admin") {
            cell7.innerHTML = `<button class="btn btn-sm btn-danger" onclick="supprimerScore(${score.id})" data-i18n="btnDelete">Supprimer</button>`;
        }

    });
}



insererScores();