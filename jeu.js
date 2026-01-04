let datatable = JSON.parse(localStorage.getItem('appData'));
let texts = datatable.texts;
let scores = datatable.scores;
let badges = datatable.badges;
let users = datatable.users
let currentuser = datatable.currentUser;

if (!currentuser) {
    window.location.href = "login.html";
}


let usernameDisplay = document.getElementById("usernamecourant");


usernameDisplay.innerText = currentuser.username

function commencerJeu() {
    let btn = document.getElementById("startGameBtn");
    btn.remove();

    let messageinput = document.getElementById("messageinput");
    messageinput.disabled = false;
    messageinput.focus();

    let secondes = 0;
    let timerElement = document.getElementById("timersecondes");

    let timer = setInterval(() => {
        secondes++;
        timerElement.innerText = secondes;
    }, 1000);

    texts = texts.filter(text => text.language == currentuser.langage)
    let phraseToType = document.getElementById("phraseToType");
    let phrasechoisi = texts[Math.floor(Math.random() * texts.length)];

    phraseToType.innerText = phrasechoisi.content;

    let texteCible = phraseToType.innerText;
    let textlength = texteCible.length;

    document.getElementById("messageinput").addEventListener("paste", function (e) {
        e.preventDefault();
        alert("On ne tricheras pas!");
    });

    let caracteresTapes = 0;

    document.getElementById("messageinput").addEventListener("input", function (char) {

        if (char.inputType === "deleteContentBackward") {
            return;
        }

        caracteresTapes = caracteresTapes + 1;
        let texteSaisi = this.value;

        if (texteSaisi === texteCible) {
            clearInterval(timer);
            messageinput.disabled = true;
            let WPM = ((textlength / 5) / (secondes / 60));
            let precision = textlength / caracteresTapes * 100;
            const date = new Date().toISOString().slice(0, 10);

            let newScore = {
                id: scores.length + 1,
                userId: currentuser.id,
                textId: phrasechoisi.id,
                wpm: WPM,
                accuracy: precision,
                date: date
            };

            scores.push(newScore);
            datatable.scores = scores;

            let utilisateurreel = users.find(user => user.id === currentuser.id);

            let badgegagne = false;

            badges.forEach(badge => {
                if (!currentuser.badges.includes(badge.id)) {
                    if (WPM >= badge.minWpm) {
                        currentuser.badges.push(badge.id);
                        utilisateurreel.badges.push(badge.id);
                        datatable.currentUser = currentuser
                        datatable.users = users;
                        badgegagne = true;
                    }
                }
            }
            )
            localStorage.setItem("appData", JSON.stringify(datatable));

            alert("Félicitations! Vous avez terminé le texte en " + secondes + " secondes. Votre vitesse de frappe est de " + Math.floor(WPM) + " MPM, avec une précision de " + Math.floor(precision) + "%. " + (badgegagne === true ? "Vous avez gagné un nouveau badge!" : ""));
        }
    });

}