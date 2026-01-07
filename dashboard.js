let datatable = JSON.parse(localStorage.getItem('appData'));

let texts = datatable.texts;
let users = datatable.users;
let rapports = datatable.reports;
let scores = datatable.scores;

let currentuser = datatable.currentUser;

let chartCountries = document.getElementById("chartCountries");
let chartLangages = document.getElementById("chartLangages");
let chartScores = document.getElementById("chartScores");
let chartJeux = document.getElementById("chartJeux");
let chartRapports = document.getElementById("chartRapports");

if (!currentuser) {
    window.location.href = "login.html";
}

if (currentuser.role != "Admin") {
    window.location.href = "scores.html";
}


let usernameDisplay = document.getElementById("usernamecourant");


usernameDisplay.innerText = currentuser.username;

document.getElementById("numusers").innerHTML = users.length;
document.getElementById("numtexts").innerHTML = texts.length;
document.getElementById("numjeux").innerHTML = scores.length;

let sommeWPM = 0;
let sommeprecision = 0;
scores.forEach(score => {
    sommeWPM += score.wpm;
    sommeprecision += score.accuracy;
})

document.getElementById("numMPM").innerHTML = Math.floor(sommeWPM / scores.length);
document.getElementById("numprecision").innerHTML = Math.floor(sommeprecision / scores.length) + "%";

let rapportcompteur = 0;

rapports.forEach(rapport => {
    if (rapport.status == "Ouvert") {
        rapportcompteur += 1;
    }
})

document.getElementById("numrapports").innerHTML = rapportcompteur;


document.addEventListener('DOMContentLoaded', function () {
    const pays = {};

    const langages = {
        en: 0,
        fr: 0,
        ar: 0
    };

    const topscores = [];

    const dates = {};
    
    const rapportetats = {
        Ouvert: 0,
        Resolu: 0,
    }

    users.forEach(user => {

        if (!Object.keys(pays).some(country => country == user.nationality)) {
            pays[user.nationality] = 1;
        } else {
            pays[user.nationality] += 1;
        }
    })

    texts.forEach(text => {
        console.log(text.language);
        if (text.language in langages) {
            langages[text.language] += 1;
        }
    })

    rapports.forEach(rapport => {
        if (rapport.status in rapportetats){
            rapportetats[rapport.status] += 1;
        }
    })



    scores.forEach(score => {
        if (!Object.keys(dates).some(date => date == score.date)) {
            dates[score.date] = 1;
            console.log("p");
        } else {
            dates[score.date] += 1;
            console.log("t");
        }
    });


    let datetri = Object.keys(dates).sort();
    console.log(dates);
    scores.sort((a, b) => b.wpm - a.wpm);
    scores = scores.slice(0, 5);


    let noms = [];

    scores.forEach(score => {
        noms.push(users.find(user => user.id === score.userId).username);
        topscores.push(score.wpm);
    })

    new Chart(chartCountries, {
        type: 'doughnut',
        data: {
            labels: Object.keys(pays),
            datasets: [{
                data: Object.values(pays),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        }
    }
    )

    new Chart(chartLangages, {
        type: 'pie',
        data: {
            labels: ["Anglais", "Français", "Arabe"],
            datasets: [{
                data: [langages.en, langages.fr, langages.ar],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        }
    }
    )

    new Chart(chartRapports, {
        type: 'polarArea',
        data: {
            labels: ["Ouvert", "Resolu"],
            datasets: [{
                data: [rapportetats.Ouvert, rapportetats.Resolu],
                backgroundColor: ['#AA2020', '#50AA50']
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        }
    }
    )


    new Chart(chartScores, {
        type: 'bar',
        data: {
            labels: noms,
            datasets: [{
                label: "MPM",
                data: topscores,
                backgroundColor: '#36A2EB'
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        }
    }
    )

    new Chart(chartJeux, {
        type: 'line',
        data: {
            labels: datetri,
            datasets: [{
                label: "Parties jouées",
                data: datetri.map(d => dates[d]),
                fill: false,
                borderColor: 'rgb(0,150 ,0)',
                backgroundColor: 'rgba(0, 255, 0, 0.25)',
                tension: 0.1
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        }
    }
    )
}
)
