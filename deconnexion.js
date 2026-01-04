let datatableau = JSON.parse(localStorage.getItem('appData'));
let currentutilisateur = datatableau.currentuser;

function deconnecter(){
    if (confirm("Vous êtes sur que vous voulez vous déconnecter?")) {
        datatableau.currentUser = null;
        localStorage.setItem("appData",JSON.stringify(datatableau));
        window.location.href = "login.html";
    };
}