
let data = localStorage.getItem('appData');

if (!data) {
    data = {
        users: [
            {id: 1, username: "admin", password: "admin123", role: "Admin", nationality: "Moroccan", badges: []},
            {id: 2, username: "user", password: "user123", role: "User", nationality: "American", badges: [2]}
        ],

    texts: [
        {id: 1, content: "JavaScript is a versatile language.", language: "en", difficulty: "Easy", category: "Code"},
        {id: 2, content: "L'ingénierie web est passionnante.", language: "fr", difficulty: "Moyen", category: "Tech"},
        {id: 3, content: "العلم نور والجهل عار", language: "ar", difficulty: "Hard", category: "Proverb"},
        {id: 4, content: "The quick brown fox jumps over the lazy dog.", language: "en", difficulty: "Easy", category: "General"},
        {id: 5, content: "Apprendre à coder ouvre de nombreuses portes.", language: "fr", difficulty: "Moyen", category: "Education"},
        {id: 6, content: "البرمجة ممتعة ومفيدة.", language: "ar", difficulty: "Hard", category: "Tech"},
        {id: 7, content: "Coding challenges improve problem-solving skills.", language: "en", difficulty: "Medium", category: "Education"}
    ],

    scores: [
        {id: 1, userId: 2, textId: 1, wpm: 45, accuracy: 98, date: "2025-11-20"},
        {id: 2, userId: 2, textId: 2, wpm: 50, accuracy: 92, date: "2025-11-21"}
    ],

    reports: [
        {id: 1, userId: 2, message: "J'ai un problème avec le site web.", status: "Ouvert"}
    ],

    badges: [
        {id: 1, name: "Speedster", minWpm: 60, description: "Ecrire plus vite que 60 MPM"},
        {id: 2, name: "Tortue", minWpm: 20, description: "Tres lente"}
    ],

    currentUser: null
}
}else{
    data = JSON.parse(data);
};

localStorage.setItem('appData', JSON.stringify(data));