let datatable = JSON.parse(localStorage.getItem('appData'));

let rapports = datatable.reports;
let currentuser = datatable.currentUser;

if (!currentuser){
    window.location.href = "login.html";
}

if (currentuser.role === "User") {
    document.querySelectorAll(".restricted").forEach(element => {
        element.remove();
    })
}

function envoieRapport(){
    const message = document.getElementById("rapportmessage").value;
    let newrapport = {
        id: rapports.length + 1,
        userId: currentuser.id,
        message: message,
        status: "Ouvert"
    };

    rapports.push(newrapport);
    datatable.reports = rapports;
    localStorage.setItem("appData",JSON.stringify(datatable));

     let page = document.getElementById("page");
    page.innerHTML = "<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Votre rapport à été envoie!</h4></div>";

    setTimeout(() => {
        window.location.href = "scores.html";
    }, 2500);
}
document.getElementById("formRapport").addEventListener("submit", e => {
    e.preventDefault();
    envoieRapport();
})