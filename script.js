const questions = [
    {
        question: "Što je osnovna svrha kombinacijskih modula?",
        answers: [
            "Pohranjivanje velike količine podataka.",
            "Izgradnja složenijih sustava od jednostavnih komponenti.",
            "Kontrola rada sekvencijskih sklopova.",
            "Mjerenje vremena i frekvencije.",
            "Izvršavanje aritmetičkih operacija nad cijelim i miješanim brojevima."
        ],
        correct: "Izgradnja složenijih sustava od jednostavnih komponenti."
    },
    {
        question: "Koja je tipična oznaka za dekoder s 'n' ulaznih bitova?",
        answers: [
            "MUX n/2^n",
            "KOD n/2^n",
            "DEK n/2^n",
            "DEMUX 2^n/n",
            "PLA n/m"
        ],
        correct: "DEK n/2^n"
    },
    {
        question: "Što se događa s izlazima dekodera ako je ulaz 'E' (enable) postavljen na 0?",
        answers: [
            "Svi izlazi su u stanju 1.",
            "Samo jedan izlaz je u stanju 1.",
            "Svi izlazi su u stanju 0.",
            "Dekoder se aktivira.",
            "Izlazi su invertirani."
        ],
        correct: "Svi izlazi su u stanju 0."
    },
    {
        question: "Koja je glavna funkcionalnost demultipleksora?",
        answers: [
            "Biranje informacije s jednog od ulaza i prijenos na jedan izlaz.",
            "Primanje informacije na jednom ulazu i raspodjela na jedan od više izlaza.",
            "Kodiranje binarnih kodnih riječi.",
            "Usporedba dva n-bitna broja.",
            "Generiranje periodičkih nizova impulsa."
        ],
        correct: "Primanje informacije na jednom ulazu i raspodjela na jedan od više izlaza."
    },
    {
        question: "Koja je obrnuta funkcionalnost od demultipleksora?",
        answers: [
            "Dekoder",
            "Koder",
            "Multipleksor",
            "Komparator",
            "Pretvornik koda"
        ],
        correct: "Multipleksor"
    },
    {
        question: "Što je karakteristika prioritetnog kodera ako je aktivno više ulaza?",
        answers: [
            "Aktivan je samo ulaz s najmanjim indeksom.",
            "Aktivan je samo ulaz s najvećim indeksom.",
            "Svi aktivni ulazi se kodiraju istovremeno.",
            "Koder se deaktivira.",
            "Djeluje samo onaj ulaz koji je prvi postao aktivan."
        ],
        correct: "Aktivan je samo ulaz s najvećim indeksom."
    },
    {
        question: "Koji sklop pretvara kodne riječi jednog koda u kodne riječi drugog koda?",
        answers: [
            "Dekoder",
            "Koder",
            "Multipleksor",
            "Pretvornik koda",
            "Komparator"
        ],
        correct: "Pretvornik koda"
    },
    {
        question: "Koji su mogući izlazi komparatora za usporedbu dva n-bitna broja A i B?",
        answers: [
            "A XOR B",
            "A AND B, A OR B",
            "A = B, A > B, A < B",
            "SUM, CARRY",
            "Q, Q̄"
        ],
        correct: "A = B, A > B, A < B"
    },
    {
        question: "Što je radni dio procesora koji obavlja operacije nad cijelim i miješanim brojevima?",
        answers: [
            "RAM",
            "ROM",
            "ALU (Aritmetičko-logička jedinica)",
            "Kontrolna jedinica",
            "Registar"
        ],
        correct: "ALU (Aritmetičko-logička jedinica)"
    },
    {
        question: "Koja je osnovna funkcija poluzbrajala (Half-adder)?",
        answers: [
            "Zbrajanje tri binarne znamenke.",
            "Oduzimanje dvije binarne znamenke.",
            "Zbrajanje dvije binarne znamenke.",
            "Množenje dvije binarne znamenke.",
            "Računanje prijenosa za više bitova."
        ],
        correct: "Zbrajanje dvije binarne znamenke."
    },
    {
        question: "Koja metoda rješava problem serijskog rasprostiranja prijenosa kod zbrajanja višebitnih brojeva?",
        answers: [
            "Kaskadiranje poluzbrajala.",
            "Korištenje akumulatora.",
            "Izdvojeno generiranje prijenosa (Carry Look-Ahead - CLA).",
            "Zbrajanje u BCD kodu.",
            "Primjena posmačnih registara."
        ],
        correct: "Izdvojeno generiranje prijenosa (Carry Look-Ahead - CLA)."
    },
    {
        question: "Što je potrebno kod BCD zbrajanja ako je suma između 10 i 15, ili veća od 15?",
        answers: [
            "Oduzimanje 6 (0110).",
            "Dodavanje 6 (0110) radi korekcije.",
            "Zbrajanje se poništava.",
            "Nema potrebe za korekcijom.",
            "Primjena kružnog posmaka."
        ],
        correct: "Dodavanje 6 (0110) radi korekcije."
    },
    {
        question: "Koja vrsta posmaka ponavlja najznačajniji bit pri posmaku udesno za brojeve s predznakom?",
        answers: [
            "Logički posmak.",
            "Kružni posmak.",
            "Aritmetički posmak.",
            "Cirkularni posmak.",
            "Nema takvog posmaka."
        ],
        correct: "Aritmetički posmak."
    },
    {
        question: "Koja memorija zadržava podatke i kada nema napajanja?",
        answers: [
            "Volatile memorija.",
            "SRAM.",
            "Nepostojana memorija.",
            "Postojana (non-volatile) memorija.",
            "DRAM."
        ],
        correct: "Postojana (non-volatile) memorija."
    },
    {
        question: "Što je kapacitet memorije ako je 'n' broj adresnih bitova i 'b' broj bitova izlazne riječi?",
        answers: [
            "C = n * b",
            "C = 2^n",
            "C = 2^n * b",
            "C = n + b",
            "C = 2^b"
        ],
        correct: "C = 2^n * b"
    },
    {
        question: "Koja je glavna karakteristika PROM memorije?",
        answers: [
            "Neprogramirljiva, MOSFET tehnologija.",
            "Višekratno programiranje i brisanje UV svjetlom.",
            "Jednokratno programiranje, programiranje taljenjem osigurača.",
            "Višekratno programiranje i brisanje električkim putem.",
            "Sadržaj se upisuje kod proizvodnje."
        ],
        correct: "Jednokratno programiranje, programiranje taljenjem osigurača."
    },
    {
        question: "Koji je primarni nedostatak PLA (Programmable Logic Array)?",
        answers: [
            "Jednostavnost programiranja.",
            "Niska cijena.",
            "Složenost programiranja, brzina rada i teškoća proizvodnje programirljivih sklopki.",
            "Niska fleksibilnost.",
            "Mali broj proizvoda."
        ],
        correct: "Složenost programiranja, brzina rada i teškoća proizvodnje programirljivih sklopki."
    },
    {
        question: "Po čemu se PAL (Programmable Array Logic) razlikuje od PLA?",
        answers: [
            "PAL ima programirljiva i I i ILI polja.",
            "PAL je složenija i sporija od PLA.",
            "Kod PAL-a je programirljiva samo matrica I sklopova.",
            "PAL koristi logičke blokove umjesto I/ILI polja.",
            "PAL ima manji broj programirljivih sklopki."
        ],
        correct: "Kod PAL-a je programirljiva samo matrica I sklopova."
    },
    {
        question: "Što je bistabil?",
        answers: [
            "Kombinacijski logički sklop.",
            "Sekvencijski sklop za brojanje impulsa.",
            "Memorijski element, digitalni sklop s dva stabilna stanja.",
            "Sklop za usporedbu brojeva.",
            "Element za pretvorbu koda."
        ],
        correct: "Memorijski element, digitalni sklop s dva stabilna stanja."
    },
    {
        question: "Koji tip bistabila služi samo za pamćenje jednog bita informacije i koristi se za registre i memorije?",
        answers: [
            "SR bistabil",
            "JK bistabil",
            "T bistabil",
            "D bistabil",
            "RS bistabil"
        ],
        correct: "D bistabil"
    },
    {
        question: "Što je osnovna svrha registara u digitalnim sustavima?",
        answers: [
            "Izvršavanje aritmetičkih operacija.",
            "Pohranjivanje višebitnih podataka.",
            "Generiranje taktnih impulsa.",
            "Pretvaranje koda.",
            "Uspoređivanje podataka."
        ],
        correct: "Pohranjivanje višebitnih podataka."
    },
    {
        question: "Koja je karakteristika posmačnih registara?",
        answers: [
            "Samo paralelni upis i ispis podataka.",
            "Nema mehanizma pomicanja podataka.",
            "Serijski upis i ispis podataka s mehanizmom pomicanja.",
            "Sastavljeni su od nepovezanih bistabila.",
            "Koriste se isključivo za dijeljenje frekvencije."
        ],
        correct: "Serijski upis i ispis podataka s mehanizmom pomicanja."
    },
    {
        question: "Koja je primjena Johnsonovog brojila koja se postiže povratnom vezom s izlaza posmačnog registra na ulaz (D0 \n\t​=Q\n\tˉ\n\t​n−1\n\t​)?",
        answers: [
            "Smanjenje broja stanja.",
            "Povećanje broja stanja za dani broj bistabila (2n).",
            "Samo brojanje u binarnom kodu.",
            "Isključivo asinkroni rad.",
            "Pojednostavljeno dekodiranje stanja bez dodatnog sklopa."
        ],
        correct: "Povećanje broja stanja za dani broj bistabila (2n)."
    },
    {
        question: "Koja je temeljna jedinica informacije u memoriji?",
        answers: [
            "Bit.",
            "Bajt.",
            "Memorijska riječ.",
            "Logički blok.",
            "Minterm."
        ],
        correct: "Memorijska riječ."
    },
    {
        question: "Koja karakteristika memorije opisuje sposobnost zadržavanja podataka bez napajanja?",
        answers: [
            "Brzina.",
            "Kapacitet.",
            "Adresabilnost.",
            "Postojanost (volatilnost).",
            "Vrijeme pristupa."
        ],
        correct: "Postojanost (volatilnost)."
    },
    {
        question: "Koja memorija omogućuje istovremeni pristup bilo kojoj memorijskoj lokaciji, s jednakim vremenom pristupa za sve lokacije?",
        answers: [
            "Serijska memorija.",
            "ROM.",
            "Sekvencijalna memorija.",
            "RAM (Random Access Memory).",
            "Magnetska traka."
        ],
        correct: "RAM (Random Access Memory)."
    },
    {
        question: "Koja je glavna razlika između statičkih (SRAM) i dinamičkih (DRAM) memorija u smislu osvježavanja?",
        answers: [
            "SRAM zahtijeva osvježavanje, DRAM ne.",
            "DRAM zahtijeva osvježavanje, SRAM ne.",
            "Obje zahtijevaju stalno osvježavanje.",
            "Niti jedna ne zahtijeva osvježavanje.",
            "Osvježavanje je potrebno samo pri pisanju podataka."
        ],
        correct: "DRAM zahtijeva osvježavanje, SRAM ne."
    },
    {
        question: "Koji je prvi korak u pristupu DRAM memoriji?",
        answers: [
            "Pristup stupcu (CAS).",
            "Pretpunjenje (Precharging).",
            "Pristup retku (RAS).",
            "Upis podataka.",
            "Čitanje podataka."
        ],
        correct: "Pristup retku (RAS)."
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
