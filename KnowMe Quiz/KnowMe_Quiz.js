const categorie = {
    LINK: {
        colore: ["#53BFF9", "#EBD871"],
        descrizione: "Sei il Wi-Fi umano: colleghi tutto e tutti, sempre sul pezzo!",
    },
    GLOW: {
        colore: ["#9A98E1", "#C7FDCC"],
        descrizione: "La tua testa brilla più di un faro: idee chiare, visione da leader.",
    },
    ARC: {
        colore: ["#287379", "#C7FDCC"],
        descrizione: "Unisci tutto e tutti: sei il ponte che non crolla mai!",
    },
    SPARK: {
        colore: ["#287379", "#F9534D"],
        descrizione: "Problemi? Tu li bruci al volo con idee geniali.",
    },
    HALO: {
        colore: ["#F4DA6A", "#C5F9CC"],
        descrizione: "Ascolti così bene che potrebbero metterti su Spotify.",
    },
    BURST: {
        colore: ["#F4DA6A", "#F9534D"],
        descrizione: "Creatività esplosiva: il cambiamento ti segue ovunque.",
    },
    SHINE: {
        colore: ["#E6E6FA", "#F4DA6A"],
        descrizione: "Brilli di equilibrio: sei il chill che tutti vorrebbero.",
    },
    FLOW: {
        colore: ["#9A98E1", "#C7FDCC"],
        descrizione: "Navighi tra le idee come un surfista sull’onda perfetta.",
    },
    PULSE: {
        colore: ["#F890C5", "#287379"],
        descrizione: "Sei il metronomo della vita: ritmo e impatto al top.",
    },
    SPIRE: {
        colore: ["#4DBEFF", "#F890C5"],
        descrizione: "Testa alta e ambizione a mille: sei già sulla vetta.",
    },
    ROOT: {
        colore: ["#E6E6FA", "#287379"],
        descrizione: "Radicato e solido: sei il terreno dove nascono i sogni.",
    },
    AETHER: {
        colore: ["#F4DA6A", "#F890C5"],
        descrizione: "Filosofia e intuizione? Sei praticamente un Jedi.",
    },
};

const domande = {
    LINK: [
        "Ti piace collaborare con gli altri?",
        "Ti senti a tuo agio nel lavorare in gruppo?",
        "Trovi facilmente modi per connetterti con chiunque?",
        "Apprezzi il valore delle relazioni a lungo termine?",
    ],
    GLOW: [
        "Ti senti in pace con te stesso/a?",
        "Trovi facile ispirare chi ti circonda?",
        "Credi che la positività sia contagiosa?",
        "Cerchi spesso armonia e serenità nella vita?",
    ],
    ARC: [
        "Ti piace unire idee diverse in una soluzione unica?",
        "Sei bravo/a a trovare punti in comune con gli altri?",
        "Apprezzi le opportunità di crescita personale?",
        "Vedi le sfide come opportunità per imparare?",
    ],
    SPARK: [
        "Ti senti spesso pieno di idee nuove?",
        "Ami iniziare nuovi progetti creativi?",
        "Trovi soluzioni innovative ai problemi?",
        "Hai la capacità di motivare gli altri con il tuo entusiasmo?",
    ],
    HALO: [
        "Ti prendi cura del benessere degli altri?",
        "Le persone si rivolgono a te per un consiglio?",
        "Trovi gratificante proteggere chi ami?",
        "Cerchi di mantenere l’armonia in ogni situazione?",
    ],
    BURST: [
        "Ti senti energico e determinato nella vita quotidiana?",
        "Ti piace agire rapidamente per raggiungere risultati?",
        "Ami affrontare nuove sfide con coraggio?",
        "Trovi stimolante superare i limiti personali?",
    ],
    SHINE: [
        "Cerchi di essere autentico/a in ogni circostanza?",
        "Ti senti una guida tranquilla per gli altri?",
        "Ti piace portare equilibrio e pace?",
        "Le persone si sentono rilassate intorno a te?",
    ],
    FLOW: [
        "Ti senti a tuo agio quando segui il flusso delle cose?",
        "Trovi soddisfazione nel lavorare in modo spontaneo?",
        "Ti piace trovare equilibrio tra creatività e logica?",
        "Ti senti connesso/a con il ritmo della natura?",
    ],
    PULSE: [
        "Senti una forte energia nel tuo modo di vivere?",
        "Ti piace il ritmo intenso della vita?",
        "Trovi motivazione nel vedere il tuo impatto nel mondo?",
        "Credi che la passione guidi le tue scelte?",
    ],
    SPIRE: [
        "Sei spinto/a da una forte ambizione?",
        "Ti piace puntare in alto e migliorarti continuamente?",
        "Ti senti gratificato quando raggiungi nuove vette?",
        "Trovi motivazione nei tuoi obiettivi personali?",
    ],
    ROOT: [
        "Trovi conforto nel legame con le tue radici?",
        "Ti senti stabile e radicato/a nella tua vita?",
        "Credi che la tua forza venga dalle tue fondamenta?",
        "Ti piace onorare le tue tradizioni e origini?",
    ],
    AETHER: [
        "Credi che ci sia qualcosa di più grande che ci connette?",
        "Ti senti attratto da pensieri filosofici e profondi?",
        "Trovi ispirazione nell’intangibile?",
        "Ami esplorare concetti spirituali e mistici?",
    ],
};

let currentQuestionIndex = 0;
let quizDomande = [];
const questionElement = document.querySelector(".question");
const startButton = document.getElementById("startButton");
const quizButtons = document.getElementById("quizButtons");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");
const auraImage = document.getElementById("auraImage");

function generaQuiz() {
    const selectedQuestions = Object.keys(domande).map(categoria => {
        const questions = domande[categoria];
        return questions[Math.floor(Math.random() * questions.length)];
    });
    quizDomande = selectedQuestions.sort(() => Math.random() - 0.5);
}

function mostraDomanda() {
    if (currentQuestionIndex < quizDomande.length) {
        questionElement.textContent = quizDomande[currentQuestionIndex];
    } else {
        mostraRisultato();
    }
}

function mostraRisultato() {
    //Cambiare la aura da random a un algoritmo tipo come in todo.md
    const categoria = Object.keys(categorie)[Math.floor(Math.random() * Object.keys(categorie).length)];
    const { descrizione, colore } = categorie[categoria];

    questionElement.style.display = "none";
    quizButtons.style.display = "none";
    resultDiv.style.display = "block";
    resultText.innerHTML = `La tua aura è <strong>${categoria}</strong>:<br>${descrizione}`;

    // Genera un'immagine con gradiente simulato
    auraImage.src = generaGradiente(colore);
    auraImage.style.display = "block";
}

function generaGradiente(colori) {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");

    const gradiente = ctx.createLinearGradient(0, 0, 500, 500);
    gradiente.addColorStop(0, colori[0]);
    gradiente.addColorStop(1, colori[1]);

    ctx.fillStyle = gradiente;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return canvas.toDataURL("image/png");
}

startButton.addEventListener("click", () => {
    generaQuiz();
    currentQuestionIndex = 0;
    startButton.style.display = "none";
    quizButtons.style.display = "flex";
    mostraDomanda();
});

yesButton.addEventListener("click", () => {
    currentQuestionIndex++;
    mostraDomanda();
});

noButton.addEventListener("click", () => {
    currentQuestionIndex++;
    mostraDomanda();
});
