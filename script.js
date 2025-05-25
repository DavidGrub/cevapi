const questions = [
    {
        question: "Koje sve oblike trgovačkih društava imamo u Hrvatskoj:",
        answers: [
            "obrt",
            "doo, jdoo i dioničko društvo",
            "doo, jdoo, dioničko i obrt",
            "ništa navedeno",
            "obrt, doo, jdoo i dioničko društvo"
        ],
        correct: "doo, jdoo i dioničko društvo"
    },
    {
        question: "Stope poreza na dobit u RH:",
        answers: [
            "5%, 10% i 15%",
            "15%, 20% i 33%",
            "10%, 18% i 33%",
            "10%, 18% i 30%",
            "15%, 20% i 30%"
        ],
        correct: "10%, 18% i 30%"
    },
    {
        question: "Radite u Mađarskoj a rezident ste u RH vi podliježete poreznim zakonima:",
        answers: [
            "samostalno odlučujem",
            "u Njemačkoj",
            "nije zakonom definirano",
            "u Hrvatskoj",
            "ništa od navedenog"
        ],
        correct: "u Hrvatskoj"
    },
    {
        question: "Sitan inventar otpisuje se:",
        answers: [
            "25%",
            "50%",
            "20%",
            "100%",
            "10%"
        ],
        correct: "100%"
    },
    {
        question: "Temeljni kapital može biti u obliku:",
        answers: [
            "novca i stvari",
            "stvari i prava",
            "novca, stvari i prava",
            "novca",
            "novca i prava"
        ],
        correct: "novca, stvari i prava"
    },
    {
        question: "Temeljni kapital reguliran je:",
        answers: [
            "zakonom o računovodstvu",
            "zakonom o obrtu",
            "ništa navedeno",
            "propisima RH",
            "propisima EU"
        ],
        correct: "propisima RH"
    },
    {
        question: "Točka pokrića govori o:",
        answers: [
            "inflaciji",
            "ništa navedeno",
            "prihodima",
            "pragu rentabilnosti",
            "troškovima"
        ],
        correct: "pragu rentabilnosti"
    },
    {
        question: "Sitnim invertarom se smatraju slušalice do iznosa:",
        answers: [
            "do 300 eura",
            "do 650 eura (točnije do 665 eura)",
            "do 250 eura",
            "do 500 eura",
            "do 1000 eura"
        ],
        correct: "do 650 eura (točnije do 665 eura)"
    },
    {
        question: "U svijetu poduzetništva koliko poduzeća preživi 3 godine:",
        answers: [
            "1/2",
            "1/6",
            "1/3",
            "1/5",
            "1/7"
        ],
        correct: "1/3"
    },
    {
        question: "Imate položeni majstorski ispit. Koji obrt možete otvoriti?",
        answers: [
            "povlašteni obrt",
            "paušalni obrt",
            "vezani obrt",
            "slobodni obrt",
            "ništa navedeno"
        ],
        correct: "vezani obrt"
    },
    {
        question: "Radite u Mađarskoj, a supruga i djeca vam žive u Hrvatskoj, vi ste u Hrvatskoj:",
        answers: [
            "djelomični nerezistent",
            "rezident RH",
            "ništa navedeno",
            "sve navedeno",
            "nerezident RH"
        ],
        correct: "rezident RH"
    },
    {
        question: "Temeljni kapital doo:",
        answers: [
            "2000 eura",
            "500 eura",
            "2500 eura",
            "1500 eura",
            "1000 eura"
        ],
        correct: "2500 eura"
    },
    {
        question: "SWOT analizom istražujemo:",
        answers: [
            "eko sustav",
            "ništa navedeno",
            "poduzeća na tržištu",
            "tržište",
            "ekonomiju"
        ],
        correct: "tržište"
    },
    {
        question: "Kolika je prosječna dob osnivača startupa:",
        answers: [
            "30 godina",
            "40 godina",
            "25 godina",
            "45 godina",
            "35 godina"
        ],
        correct: "45 godina"
    },
    {
        question: "Koji se dohodak smatra ugovorom o djelu:",
        answers: [
            "samostalna djelatnost",
            "dohodak od nesamostalnog rada",
            "drugi dohodak",
            "i drugi dohodak i dohodak od nesamostalnog rada",
            "ništa od navedenog"
        ],
        correct: "drugi dohodak"
    },
    {
        question: "Amortizacija je:",
        answers: [
            "postupno trošenje kratkotrajne imovine",
            "postupno trošenje dugotrajne imovine",
            "kupovina dugotrajne imovine",
            "prodaja dugotrajne imovine",
            "prodaja kratkotrajne imovine"
        ],
        correct: "postupno trošenje dugotrajne imovine"
    },
    {
        question: "U Hrvatskoj nemate prebivalište ni boravište, a zaposleni ste u državnoj službi i po toj osnovi primate plaću. Vi ste u Hrvatskoj:",
        answers: [
            "sve navedeno",
            "ništa navedenoga",
            "nerezident RH",
            "rezident",
            "nije definirano zakonom"
        ],
        correct: "rezident"
    },
    {
        question: "Tvrtka je:",
        answers: [
            "ime pod kojim poduzeće posluje",
            "drugi naziv za poduzeće",
            "isto što i trgovačko društvo pdf strana 91",
            "ništa navedeno",
            "isto što i obrt"
        ],
        correct: "ime pod kojim poduzeće posluje"
    },
    {
        question: "Koji je postotak mikro poduzeća unutar Europske unije:",
        answers: [
            "98%",
            "95%",
            "91%",
            "90%",
            "99%"
        ],
        correct: "99%"
    },
    {
        question: "Koliko se može imati najduže sezonski obrt:",
        answers: [
            "9 mjeseci",
            "1 godinu",
            "4 mjeseca",
            "3 mjeseca",
            "6 mjeseci"
        ],
        correct: "9 mjeseci"
    },
    {
        question: "Od koje vrijednosti se računalna oprema smatra osnovnim sredstvom:",
        answers: [
            "do 1000 eura",
            "preko 350 eura",
            "preko 200 eura",
            "preko 400 eura",
            "preko 500 eura (točnije preko 665 eura)"
        ],
        correct: "preko 500 eura (točnije preko 665 eura)"
    },
    {
        question: "Parafiskalni nameti plaćaju se prema:",
        answers: [
            "prihodima",
            "veličini poduzeća",
            "porezu",
            "ništa navedeno",
            "djelatnosti"
        ],
        correct: "djelatnosti"
    },
    {
        question: "Koliko Hrvatska ima jednoroga:",
        answers: [
            "4",
            "3",
            "5",
            "2",
            "1"
        ],
        correct: "2"
    },
    {
        question: "Za vezani obrt potrebno je posjedovati:",
        answers: [
            "potvrdu o završenom tečaju",
            "povlasticu nadležne ustanove",
            "završen fakultet u struci",
            "majstorski ispit",
            "ništa od navedenog"
        ],
        correct: "majstorski ispit"
    },
    {
        question: "Koliko iznosi temeljni kapital kod jdoo:",
        answers: [
            "1 euro",
            "100 eura",
            "5 eura",
            "10 eura",
            "50 eura"
        ],
        correct: "1 euro"
    },
    {
        question: "Za povlašteni obrt potrebno je posjedovati:",
        answers: [
            "licencu",
            "povlasticu nadležnih ustanova",
            "majstorski ispit",
            "ništa navedeno",
            "strukovnu školu"
        ],
        correct: "povlasticu nadležnih ustanova"
    },
    {
        question: "Segmenti PEST analize su:",
        answers: [
            "ekonomski, pravni, društveni i ustrojstveni",
            "politički, ekonomski, pravni i tehnologija",
            "ništa navedeno",
            "sve navedeno",
            "politički, ekonomski, tehnologija i društva"
        ],
        correct: "politički, ekonomski, tehnologija i društva"
    },
    {
        question: "Najčešći oblici poslovnih subjekata u RH:",
        answers: [
            "(O)PG-ovi",
            "ništa navedeno",
            "obrt, trgovačka društva, samostalna djelatnost i (O)PG",
            "obrt, samostalna djelatnost i (O)PG",
            "trgovačka društva, samostalna djelatnost i (O)PG"
        ],
        correct: "obrt, trgovačka društva, samostalna djelatnost i (O)PG"
    },
    {
        question: "Poslovni plan temelj je za investiranje do iznosa:",
        answers: [
            "10 000 eura",
            "100 000 eura",
            "200 000 eura",
            "50 000 eura",
            "150 000 eura"
        ],
        correct: "50 000 eura"
    },
    {
        question: "Koliko imamo faza razvoja startupa:",
        answers: [
            "15",
            "3",
            "5",
            "7",
            "10"
        ],
        correct: "5"
    },
    {
        question: "Rezidente i nerezidente veže zakon o:",
        answers: [
            "nesamostalnom radu",
            "dobiti",
            "porezu na dohodak",
            "porezu na imovinu",
            "poduzećima"
        ],
        correct: "porezu na dohodak"
    },
    {
        question: "Radite u Njemačkoj, a u Hrvatskoj imate djecu, vi ste u Hrvatskoj:",
        answers: [
            "rezident RH",
            "ništa navedeno",
            "nerezident RH",
            "i rezident i nerezident",
            "vlasnik"
        ],
        correct: "rezident RH"
    },
    {
        question: "Nerezidenti u Hrvatskoj su sve osobe koje:",
        answers: [
            "rade i državnoj službi i tako ostvaruju dohodak",
            "imaju boravište u RH",
            "nemaju prebivalište ni boravište u RH",
            "ništa navedeno",
            "imaju prebivalište i boravište u RH"
        ],
        correct: "nemaju prebivalište ni boravište u RH"
    },
    {
        question: "Mjesečni osobni odbitak u 2025. godini iznosi:",
        answers: [
            "530,90 eura",
            "350 eura",
            "430,90 eura",
            "500 eura",
            "330,90 eura",
            "600 eura"
        ],
        correct: "600 eura"
    },
    {
        question: "Osnovna sredstva imaju vijek trajanja:",
        answers: [
            "dulji od 5 godina",
            "do jedne godine",
            "dulji od 2 godine",
            "dulji od 1 godine",
            "ništa navedeno"
        ],
        correct: "dulji od 1 godine"
    },
    {
        question: "Kod ugovora o djelu, isplaćuje se:",
        answers: [
            "drugi dohodak",
            "autorski honorar",
            "ništa navedeno",
            "dohodak od nesamostalnog rada",
            "dohodak od samostalnog i ne samostalnog rada"
        ],
        correct: "drugi dohodak"
    },
    {
        question: "Platno poslovnog modela sastoji se od koliko segemenata:",
        answers: [
            "7",
            "8",
            "9",
            "10",
            "5"
        ],
        correct: "9"
    },
    {
        question: "Imate odobrenje nadležnog Ministarstva za prodaju oružja. Koji obrt možete otvoriti?",
        answers: [
            "paušalni obrt",
            "vezani obrt",
            "ništa navedeno",
            "slobodni obrt",
            "povlašteni obrt"
        ],
        correct: "povlašteni obrt"
    },
    {
        question: "Bruto II kod osobnog dohotka je:",
        answers: [
            "ništa od navedenog",
            "trošak poslodavcu bez zdravstvenog osiguranja za zaposlenika",
            "ukupni trošak zaposlenika poslodavcu",
            "iznos koji poslodavac isplaćuje zaposleniku na tekući račun",
            "sve navedeno"
        ],
        correct: "ukupni trošak zaposlenika poslodavcu"
    },
    {
        question: "Kriteriji određivanja veličine poduzeća:",
        answers: [
            "prihodi, ukupna aktiva i broj zaposlenika",
            "ukupna aktiva i prihodi",
            "ništa navedeno",
            "prihodi, rashodi i broj zaposlenika",
            "prihodi i broj zaposlenika"
        ],
        correct: "prihodi, ukupna aktiva i broj zaposlenika"
    },
    {
        question: "Validacija je",
        answers: [
            "isto što i amortizacija",
            "neto iznos poduzeća",
            "vrijednost poduzeća",
            "potvrda proizvoda od strane tržišta",
            "sposobnost povećanja količine proizvodnje bez povećanja troškova",
            "no answer"
        ],
        correct: "potvrda proizvoda od strane tržišta"
    },
    {
        question: "Imate bruto iznos 1.400€, osobni odbitak 600€, zdravstveno osiguranje 200€, doprinose MIO 300€, porez 100€, koliki je neto:",
        answers: [
            "1.000€",
            "500€",
            "900€",
            "400€",
            "800€",
            "no answer"
        ],
        correct: "800€"
    },
    {
        question: "Razlika između glasača na izborima je u:",
        answers: [
            "postotnom bodu",
            "postotku",
            "broju glasova",
            "sve navedeno",
            "ništa navedenom",
            "no answer"
        ],
        correct: "postotnom bodu"
    },
    {
        question: "Imate bruto iznos 2.500€, osobni odbitak 600€, zdravstveno osiguranje 500€, doprinose MIO 700€, porez 300€, koliki je neto:",
        answers: [
            "1.000€",
            "1.200€",
            "1.100€",
            "1.300€",
            "1.500€",
            "no answer"
        ],
        correct: "1.000€"
    },
    {
        question: "Pojam ekosustav vežemo uz:",
        answers: [
            "poljoprivredu",
            "bootstraping",
            "ništa od navedenog",
            "ekologiju",
            "startup",
            "no answer"
        ],
        correct: "startup"
    },
    {
        question: "Koja je najlikvidnija imovina:",
        answers: [
            "nekretnine",
            "novac",
            "ništa navedeno",
            "obveznice",
            "dionice",
            "no answer"
        ],
        correct: "novac"
    },
    {
        question: "Amortizacija je definirana zakonom o.",
        answers: [
            "porezu na investiranje",
            "porezu na dobit",
            "porezu na dohodak",
            "porezu o poduzećima",
            "porezu na nekretnine",
            "no answer"
        ],
        correct: "porezu na dobit"
    },
    {
        question: "Što je ETF:",
        answers: [
            "mirovinski fond",
            "ništa navedeno",
            "dohodak",
            "investicijski fond",
            "obvezni fond",
            "no answer"
        ],
        correct: "investicijski fond"
    },
    {
        question: "Kada se isplaćuje drugi dohodak:",
        answers: [
            "ništa navedeno",
            "ugovora o djelu",
            "osobnog odbitka",
            "osobnog dohotka",
            "dionica",
            "no answer"
        ],
        correct: "ugovora o djelu"
    },
    {
        question: "U poslovnom svijetu što je 3F?",
        answers: [
            "fondovi",
            "prijatelji",
            "obitelj",
            "sve navedeno",
            "obitelj, prijatelji i osobe koje vjeruju u tvoj poslovni pothvat",
            "no answer"
        ],
        correct: "obitelj, prijatelji i osobe koje vjeruju u tvoj poslovni pothvat"
    },
    {
        question: "Kod (O)PG proizvodnja je za:",
        answers: [
            "ništa navedeno",
            "poduzeća",
            "vlastite potrebe",
            "zaposlenika",
            "potrebe tržišta i za ovo pdf str 96",
            "no answer"
        ],
        correct: "potrebe tržišta i za ovo pdf str 96"
    },
    {
        question: "Što je EKS kod kredita:",
        answers: [
            "depozit",
            "glavnica",
            "ništa navedeno",
            "ukupni iznos kredita",
            "učešće",
            "no answer"
        ],
        correct: "ukupni iznos kredita"
    },
    {
        question: "Koliko imamo obveznih mirovinskih fondova u Republici Hrvatskoj:",
        answers: [
            "3",
            "4",
            "1",
            "ništa navedeno",
            "2",
            "no answer"
        ],
        correct: "2"
    },
    {
        question: "Kada je potrebno izdati eRačun:",
        answers: [
            "kod poslovanja s obrtnicima",
            "ništa navedeno",
            "kod poslovanja s obveznicima javne nabave",
            "kod poslovanja sa svim obrtima i trgovačkim društvima",
            "kod poslovanja s trgovačkim društvima",
            "no answer"
        ],
        correct: "kod poslovanja s obveznicima javne nabave"
    },
    {
        question: "Imate bruto iznos 1.400€, osobni odbitak 600€, zdravstveno osiguranje 200€, doprinose MIO 300€, porez 100€, koliki je neto:",
        answers: [
            "1.000€",
            "500€",
            "900€",
            "400€",
            "800€",
            "no answer"
        ],
        correct: "800€"
    },
    {
        question: "Kod većih prihoda a manjih rashoda govorimo o:",
        answers: [
            "bilanci",
            "neto iznosu",
            "bruto iznosu",
            "dobiti",
            "gubitku",
            "no answer"
        ],
        correct: "dobiti"
    },
    {
        question: "Na tržištu kapitala najdominantnije su:",
        answers: [
            "obveznice",
            "banke",
            "dividende",
            "kamate",
            "ništa navedeno",
            "no answer"
        ],
        correct: "obveznice"
    },
    {
        question: "Što je skaliranje kod startupa:",
        answers: [
            "bankrot",
            "sposobnost povećanja proizvodnje bez povećanja troškova",
            "ništa navedeno",
            "potvrda proizvoda na tržištu",
            "fluktacija na tržištu",
            "no answer"
        ],
        correct: "sposobnost povećanja proizvodnje bez povećanja troškova"
    },
    {
        question: "Čemu služi osobni odbitak:",
        answers: [
            "umanjuje poreznu osnovicu",
            "umanjuje doprinose",
            "ništa od navedenog",
            "umanjuje osobni dohodak",
            "povećava doprinose",
            "no answer"
        ],
        correct: "umanjuje poreznu osnovicu"
    },
    {
        question: "2. stup mirovinskog osiguranja je:",
        answers: [
            "dobrovoljni stup mirovinskog osiguranja",
            "obvezan samo za mlađe osobe do 30 godina",
            "obvezan kod osoba u mirovini",
            "obvezan za starije osobe od 30 godina",
            "obvezan stup mirovinskog osiguranja za sve zaposlenike",
            "no answer"
        ],
        correct: "obvezan stup mirovinskog osiguranja za sve zaposlenike"
    },
    {
        question: "Kod ugovora o djelu, isplaćuje se",
        answers: [
            "ništa navedeno",
            "dohodak od nesamostalnog rada",
            "dohodak od samostalnog i ne samostalnog rada",
            "autorski honorar",
            "drugi dohodak",
            "no answer"
        ],
        correct: "drugi dohodak"
    }
];

let availableQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;

const questionNumberElement = document.getElementById('question-number');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

function initializeQuiz() {
    availableQuestions = [...questions]; // Kopiraj pitanja da se ne mijenja originalni niz
    shuffleArray(availableQuestions);
    currentQuestionIndex = 0;
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= availableQuestions.length) {
        questionElement.textContent = "Kviz je završen!";
        answersContainer.innerHTML = '';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
        questionNumberElement.textContent = '';
        return;
    }

    const q = availableQuestions[currentQuestionIndex];
    questionNumberElement.textContent = `Pitanje ${currentQuestionIndex + 1} od ${availableQuestions.length}`;
    questionElement.textContent = q.question;
    answersContainer.innerHTML = '';
    feedbackElement.textContent = '';
    nextButton.disabled = true;
    selectedAnswer = null;

    q.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(button, answer, q.correct));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(button, answerText, correctAnswer) {
    if (selectedAnswer !== null) return; // Ne dopusti ponovni odabir nakon što je odgovor već odabran

    selectedAnswer = answerText;

    // Ukloni 'selected' klasu sa svih gumba i dodaj je odabranom
    Array.from(answersContainer.children).forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');

    if (answerText === correctAnswer) {
        feedbackElement.textContent = "Točan odgovor!";
        feedbackElement.className = 'feedback-message correct';
    } else {
        feedbackElement.textContent = `Krivi odgovor! Točan odgovor je: ${correctAnswer}`;
        feedbackElement.className = 'feedback-message incorrect';
    }
    nextButton.disabled = false; // Omogući gumb "Dalje"
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Funkcija za miješanje niza (Fisher-Yates algoritam)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

nextButton.addEventListener('click', nextQuestion);

// Pokreni kviz kada se stranica učita
document.addEventListener('DOMContentLoaded', initializeQuiz);