let datatable = JSON.parse(localStorage.getItem('appData'));
let users = datatable.users;

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = users.find(u => u.username === username && u.password === password);
    if (user) {

        let currentuser = user;
        currentuser.langage = "fr";
        
        datatable.currentUser = currentuser
        localStorage.setItem('appData', JSON.stringify(datatable));
        window.location.href = "dashboard.html";
    } else {
        let alertDiv = document.getElementById("alertDiv");
        alertDiv.innerHTML = "<div class='alert alert-danger' role='alert'>Nom d'utilisateur ou mot de passe incorrect!</div>";
        setTimeout(() => {
            alertDiv.innerHTML = "";
        }, 4000);
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    login();
});