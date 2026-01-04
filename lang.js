let langselect = document.getElementById("langSelect");
langselect.value = currentuser.langage;

let translations = {
    en: {
        dashboard: "Dashboard",
        navusers: "Users",
        navtexts: "Texts",
        navscores: "Scores",
        navreports: "Reports",
        navsubmitreport: "Submit a report",
        navbadges: "Badges",
        btnplay: "Play",
        deconnect: "Logout",

        numusertotal: "Total users",
        numtexttotal: "Total texts",
        numjeux: "Total games played",
        numavgWPM: "Average WPM",
        numavgacc: "Average Accuracy",
        numreports: "Non-resolved reports",

        textpays: "User countries",
        textlangs: "Text languages",
        textreports: "Report status",
        textscores: "Top 5 scores",
        textgames: "Games played since first round",

        usersTitle: "Users",
        addUser: "Add a user",
        exportPdf: "Export PDF",

        id: "ID",

        username: "Username",
        nationality: "Nationality",
        role: "Role",
        password: "Password",
        add: "Add",


        textsTitle: "Texts",
        btnAddText: "Add a text",
        content: "Content",
        language: "Language",
        difficulty: "Difficulty",
        category: "Category",

        scoresTitle: "Scores",
        userId: "User ID",
        textId: "Text ID",
        wpm: "Words per minute",
        accuracy: "Accuracy",
        date: "Date",

        reportsTitle: "Reports",
        message: "Message",
        status: "Status",

        submitReportTitle: "Submit a report",
        send: "Send",


        badgesTitle: "Badges",
        addBadge: "Add a badge",
        name: "Name",
        wpmRequired: "WPM required",
        description: "Description",

        gameTitle: "Ready to play?",
        timeLabel: "Time",
        startGame: "Start game",

        actions: "Actions",
        btnModify: "Modify",
        btnDelete: "Delete",
        btnResolve: "Resolve",

        modifyUser: "Modify user",
        modifyText: "Modify text",
        modifyBadge: "Modify badge",

    },

    fr: {
        dashboard: "Dashboard",
        navusers: "Utilisateurs",
        navtexts: "Texts",
        navscores: "Scores",
        navreports: "Rapports",
        navsubmitreport: "Saisir un rapport",
        navbadges: "Badges",
        btnplay: "Jouer",
        deconnect: "Deconnexion",

        numusertotal: "Nombre d'utilisateurs totales",
        numtexttotal: "Nombre du texts totales",
        numjeux: "Nombre des parties jouées",
        numavgWPM: "Moyenne MPM",
        numavgacc: "Moyenne precision",
        numreports: "Rapports non-resolu",

        textpays: "Pays des utilisateurs",
        textlangs: "Langages des texts",
        textreports: "Statut des rapports",
        textscores: "Top 5 scores",
        textgames: "Parties jouées depuis premiére partie",

        usersTitle: "Utilisateurs",
        addUser: "Ajouter un utilisateur",
        exportPdf: "Export PDF",

        id: "ID",

        username: "Nom d'utilisateur",
        nationality: "Nationalité",
        role: "Rôle",

        password: "Mot de passe",
        add: "Ajouter",

        actions: "Actions",

        textsTitle: "Textes",
        btnAddText: "Ajouter un texte",
        content: "Contenu",
        language: "Langue",
        difficulty: "Difficulté",
        category: "Catégorie",

        scoresTitle: "Scores",
        userId: "ID d'utilisateur",
        textId: "ID du texte",
        wpm: "Mots par minutes",
        accuracy: "Précision",
        date: "Date",

        reportsTitle: "Rapports",
        message: "Message",
        status: "Statut",

        badgesTitle: "Badges",
        addBadge: "Ajouter un badge",
        name: "Nom",
        wpmRequired: "MPM requis",
        description: "Description",

        submitReportTitle: "Saisir un rapport",
        send: "Envoyer",

        gameTitle: "Prêt à jouer?",
        timeLabel: "Temps",
        startGame: "Commencer le jeu",

        btnModify: "Modifier",
        btnDelete: "Supprimer",
        btnResolve: "Resoudre",

        modifyUser: "Modifier l'utilisateur",
        modifyText: "Modifier le texte",
        modifyBadge: "Modifier le badge",
    },

    ar: {

        navusers: "المستخدمون",
        navtexts: "النصوص",
        navscores: "النتائج",
        navreports: "البلاغات",
        navsubmitreport: "تقديم بلاغ",
        navbadges: "الشارات",
        btnplay: "لعب",
        deconnect: "خروج",

        dashboard: "لوحة القيادة",
        numusertotal: "إجمالي المستخدمين",
        numtexttotal: "إجمالي النصوص",
        numjeux: "إجمالي الألعاب الملعوبة",
        numavgWPM: "متوسط الكلمات في الدقيقة",
        numavgacc: "متوسط الدقة",
        numreports: "بلاغات غير محلولة",

        textpays: "بلدان المستخدمين",
        textlangs: "لغات النص",
        textreports: "حالة البلاغ",
        textscores: "أفضل 5 نتائج",
        textgames: "ألعاب لُعبت منذ الجولة الأولى",

        usersTitle: "المستخدمون",
        addUser: "إضافة مستخدم",
        exportPdf: "تصدير PDF",

        id: "الرقم",
        username: "اسم المستخدم",
        nationality: "الجنسية",
        role: "الدور",
        actions: "الإجراءات",

        password: "كلمة المرور",
        add: "إضافة",

        textsTitle: "النصوص",
        btnAddText: "إضافة نص",
        content: "المحتوى",
        language: "اللغة",
        difficulty: "الصعوبة",
        category: "الفئة",

        scoresTitle: "النتائج",
        userId: "معرف المستخدم",
        textId: "معرف النص",
        wpm: "الكلمات في الدقيقة",
        accuracy: "الدقة",
        date: "التاريخ",

        reportsTitle: "البلاغات",
        message: "الرسالة",
        status: "الحالة",


        badgesTitle: "الشارات",
        addBadge: "إضافة شارة",
        name: "الاسم",
        wpmRequired: "الكلمات المطلوبة",
        description: "الوصف",

        submitReportTitle: "تقديم بلاغ",
        send: "إرسال",

        gameTitle: "جاهز للعب؟",
        timeLabel: "الوقت",
        startGame: "ابدأ اللعبة",

        btnModify: "تعديل",
        btnDelete: "حذف",
        btnResolve: "حل",

        modifyUser: "تعديل المستخدم",
        modifyText: "تعديل النص",
        modifyBadge: "تعديل الشارة",



    }
}

let langagecourant = currentuser.langage

function traduirePage(lang) {
    const elementsdetraduire = document.querySelectorAll("[data-i18n]");

    elementsdetraduire.forEach(element => {
        const key = element.getAttribute("data-i18n");

        const translation = translations[lang][key] || translations['fr'][key];

        if (translation) {
            element.innerText = translation;
        }
    })
}


document.getElementById("langSelect").addEventListener("change", event => {
    currentuser.langage = event.target.value;
    traduirePage(currentuser.langage);

    datatable.currentUser = currentuser;
    localStorage.setItem("appData", JSON.stringify(datatable));
}
)


traduirePage(langagecourant);

