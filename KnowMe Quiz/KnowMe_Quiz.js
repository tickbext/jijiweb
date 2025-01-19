document.addEventListener("DOMContentLoaded", () => {
    const categorie = {
        LINK: { colore: ["#53BFF9", "#EBD871"], descrizione: "Sei quello che unisce tutto: senza di te, manca sempre qualcosa." },
        GLOW: { colore: ["#9A98E1", "#C7FDCC"], descrizione: "Illumini le situazioni senza nemmeno provarci." },
        ARC: { colore: ["#287379", "#C7FDCC"], descrizione: "Per te ogni viaggio è una storia da raccontare, anche se ci sono un sacco di curve." },
        SPARK: { colore: ["#287379", "#F9534D"], descrizione: "Le tue idee sono fuochi d’artificio: arrivano e boom, tutto cambia." },
        HALO: { colore: ["#F4DA6A", "#C5F9CC"], descrizione: "Hai quella calma che tutti vorrebbero, tipo zen ma con stile." },
        BURST: { colore: ["#F4DA6A", "#F9534D"], descrizione: "Sei pura energia, sempre pronto a fare la differenza." },
        SHINE: { colore: ["#E6E6FA", "#F4DA6A"], descrizione: "Porti positività senza filtri, e questo è il tuo superpotere." },
        FLOW: { colore: ["#9A98E1", "#C7FDCC"], descrizione: "Con te, le cose scorrono e basta." },
        PULSE: { colore: ["#F890C5", "#287379"], descrizione: "Hai un ritmo che dà la carica a chiunque ti stia intorno." },
        SPIRE: { colore: ["#4DBEFF", "#F890C5"], descrizione: "Per te, l’unico limite è il cielo, e forse nemmeno quello." },
        ROOT: { colore: ["#E6E6FA", "#287379"], descrizione: "Hai radici profonde, ma non smetti mai di crescere." },
        AETHER: { colore: ["#F4DA6A", "#F890C5"], descrizione: "Vedi cose che gli altri nemmeno immaginano: sei un visionario." },
    };

    const domande = {
        LINK: [
            "Ti piace collaborare con gli altri?",
            "Ti senti a tuo agio lavorando in gruppo?",
            "Trovi facilmente modi per connetterti con chiunque?",
            "Apprezzi il valore di relazioni durature?",
        ],
        GLOW: [
            "Ti senti in armonia con te stesso/a?",
            "Trovi facile ispirare chi ti circonda?",
            "Credi che la positività sia contagiosa?",
            "Cerchi spesso serenità e equilibrio nella vita?",
        ],
        ARC: [
            "Ti piace combinare idee diverse in una soluzione unica?",
            "Sei abile nel trovare punti in comune con gli altri?",
            "Apprezzi le opportunità di crescita personale?",
            "Vedi le sfide come occasioni per imparare?",
        ],
        SPARK: [
            "Ti senti spesso pieno/a di idee nuove?",
            "Ami avviare nuovi progetti creativi?",
            "Trovi soluzioni innovative ai problemi?",
            "Hai il talento di motivare gli altri con il tuo entusiasmo?",
        ],
        HALO: [
            "Ti prendi cura del benessere delle persone intorno a te?",
            "Le persone si rivolgono a te per un consiglio?",
            "Trovi gratificante proteggere chi ami?",
            "Cerchi di mantenere l’armonia in ogni situazione?",
        ],
        BURST: [
            "Ti senti energico/a e determinato/a nella vita quotidiana?",
            "Ti piace agire rapidamente per ottenere risultati?",
            "Ami affrontare nuove sfide con coraggio?",
            "Trovi stimolante superare i tuoi limiti personali?",
        ],
        SHINE: [
            "Cerchi di essere autentico/a in ogni circostanza?",
            "Ti senti un'ispirazione per gli altri?",
            "Ti piace portare equilibrio e pace?",
            "Le persone si sentono a loro agio intorno a te?",
        ],
        FLOW: [
            "Ti senti sereno/a quando segui il flusso delle cose?",
            "Trovi soddisfazione nel lavorare in modo spontaneo?",
            "Ti piace trovare un equilibrio tra creatività e logica?",
            "Ti senti connesso/a al ritmo della natura?",
        ],
        PULSE: [
            "Senti una forte energia nel tuo modo di vivere?",
            "Ti piace il ritmo intenso della vita?",
            "Trovi motivazione vedendo l’impatto delle tue azioni?",
            "Credi che la passione guidi le tue scelte?",
        ],
        SPIRE: [
            "Sei guidato/a da una forte ambizione?",
            "Ti piace puntare in alto e migliorarti continuamente?",
            "Ti senti gratificato/a raggiungendo nuovi traguardi?",
            "Trovi motivazione nei tuoi obiettivi personali?",
        ],
        ROOT: [
            "Trovi conforto nel legame con le tue radici?",
            "Ti senti stabile e radicato/a nella tua vita?",
            "Credi che la tua forza venga dalle tue fondamenta?",
            "Ami onorare tradizioni e origini?",
        ],
        AETHER: [
            "Credi che ci sia qualcosa di più grande che ci connette tutti?",
            "Ti senti attratto/a da pensieri profondi e filosofici?",
            "Trovi ispirazione nell’intangibile?",
            "Ami esplorare concetti spirituali e mistici?",
        ],
    };

    const maxQuestions = 20;
    let currentQuestionIndex = 0;
    let auraPoints = {};
    let quizDomande = [];
    const titleElement = document.querySelector("h1");
    const questionElement = document.querySelector(".question");
    const startButton = document.getElementById("startButton");
    const quizButtons = document.getElementById("quizButtons");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("resultText");
    const auraImage = document.getElementById("auraImage");
    const homeButton = document.getElementById("homeButton");

    // Initialize aura points
    Object.keys(categorie).forEach((key) => {
        auraPoints[key] = 0;
    });

    function generateQuestion() {
        if ( currentQuestionIndex >= maxQuestions || currentQuestionIndex >= quizDomande.length) {
            showResult();
            return;
        }

        const currentQuestion = quizDomande[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
    }

    function calculateDominantAura() {
        const [winnerAura] = Object.entries(auraPoints).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);  // descending
     return winnerAura[0]; // The key with the largest score
    }

    function showResult() {
        const dominantAura = calculateDominantAura();
        const { descrizione, colore } = categorie[dominantAura];

        questionElement.style.display = "none";
        quizButtons.style.display = "none";
        resultDiv.style.display = "block";
        resultText.innerHTML = `La tua aura è <strong>${dominantAura}</strong>:<br>${descrizione}`;

        auraImage.src = generateGradient(colore);
        auraImage.style.display = "block";
    }

    function generateGradient(colori) {
        const canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 500;
        const ctx = canvas.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 500, 500);
        gradient.addColorStop(0, colori[0]);
        gradient.addColorStop(1, colori[1]);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        return canvas.toDataURL("image/png");
    }

    function handleAnswer(isYes) {
        const currentQuestion = quizDomande[currentQuestionIndex];
        const currentAura = currentQuestion.aura;

        // Adjust points based on the answer
        if (isYes) {
            auraPoints[currentAura]++;
            if (domande[currentAura].length > 0) {
                const nextQuestion = domande[currentAura].shift();
                quizDomande.push({ question: nextQuestion, aura: currentAura });
            }
        } else {
            auraPoints[currentAura]--;
        }

        currentQuestionIndex++;
        generateQuestion();
    }

    startButton.addEventListener("click", () => {
        console.log("Start button clicked!");
        titleElement.style.display = "none"; // Hide title
        currentQuestionIndex = 0;

        // Prepare initial set of questions
        quizDomande = Object.keys(domande).map((aura) => ({
            question: domande[aura].shift(),
            aura: aura,
        }));
        quizDomande = quizDomande.sort(() => Math.random() - 0.5); // Shuffle questions

        startButton.style.display = "none";
        quizButtons.style.display = "flex";
        generateQuestion();
    });

    yesButton.addEventListener("click", () => {
        handleAnswer(true);
    });

    noButton.addEventListener("click", () => {
        handleAnswer(false);
    });

    homeButton.addEventListener("click", () => {
        window.location.href = "../index.html";
    });
});
