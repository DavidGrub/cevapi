const questions = [
    {
        question: "ŠTO SE PIŠE U SETUP FUNKCIJI NA ARDUINU?",
        answers: [
            "Podešavaju se početne vrijednosti i konfiguriraju pinovi."
        ],
        correct: "Podešavaju se početne vrijednosti i konfiguriraju pinovi."
    },
    {
        question: "U ČEMU ISKAZUJEMO ELEKTRIČNI NAPON?",
        answers: [
            "Volt (V)"
        ],
        correct: "Volt (V)"
    },
    {
        question: "KOLIKO SIGNALNIH ŽICA IMA 12C?",
        answers: [
            "Dvije (SDA i SCL)"
        ],
        correct: "Dvije (SDA i SCL)"
    },
    {
        question: "ŠTO RADI NAREDBA DIGITAL WRITE (10,HIGH);?",
        answers: [
            "Postavlja digitalni pin 10 na visoki logički nivo (HIGH)."
        ],
        correct: "Postavlja digitalni pin 10 na visoki logički nivo (HIGH)."
    },
    {
        question: "AKO KOMPILIRAMO I POKRENEMO OVAKAV PROGRAM KOJA OD OVIH TVRDNJI JE TOČNA? (Pitanje se odnosi na sliku programa)",
        answers: [
            "LED dioda na pinu 13 će treptati."
        ],
        correct: "LED dioda na pinu 13 će treptati."
    },
    {
        question: "NA MIKROKONTROLER SU SPOJENE LED DIODE PREKO OTPORNIKA NA PINOVE 2, 3 I 4. UZ OVAKO NAPISANI PROGRAM KOJE LED DIODE ĆE SVIJETLITI KADA POKRENEMO PROGRAM: (Pitanje se odnosi na sliku programa)",
        answers: [
            "Sve tri će biti ugašene."
        ],
        correct: "Sve tri će biti ugašene."
    },
    {
        question: "POMOĆU KOJE SABIRNICE SE POSTAVLJA INICIJALNO ARDUINO BOOTLOADER NA ATMEL MIKROKONTROLERIMA?",
        answers: [
            "ISP (In-System Programming)"
        ],
        correct: "ISP (In-System Programming)"
    },
    {
        question: "NA MIKROKONTROLER JE SPOJEN POTENCIOMETAR (JOYSTICK OS) NA AO PIN. UPOTRIJEBLJEN JE KOD NA SLICI. KOLIKA JE VRIJEDNOST VARIJABLE A KADA JE POTENCIOMETAR U IDEALNOM SREDNJEM POLOŽAJU? (Pitanje se odnosi na sliku koda i sheme)",
        answers: [
            "511-512"
        ],
        correct: "511-512"
    },
    {
        question: "KOJU METODU KORISTIMO ZA SERIJSKU KOMUNIKACIJU NA ARDUINU?",
        answers: [
            "Serial.begin() i Serial.print()"
        ],
        correct: "Serial.begin() i Serial.print()"
    },
    {
        question: "KOJA JE RAZLIKA IZMEĐU DIGITALNOG I ANALOGNOG PINA NA ARDUINU?",
        answers: [
            "Digitalni pinovi imaju samo dva stanja (HIGH/LOW), analogni mogu čitati niz vrijednosti."
        ],
        correct: "Digitalni pinovi imaju samo dva stanja (HIGH/LOW), analogni mogu čitati niz vrijednosti."
    },
    {
        question: "KOJA JE SVRHA FUNKCIJE DELAY() U ARDUINO PROGRAMIRANJU?",
        answers: [
            "Pauzira izvršavanje programa na određeno vrijeme (u milisekundama)."
        ],
        correct: "Pauzira izvršavanje programa na određeno vrijeme (u milisekundama)."
    },
    {
        question: "ŠTO JE PWM SIGNAL I GDJE SE KORISTI NA ARDUINU?",
        answers: [
            "PWM (Pulse Width Modulation) mijenja širinu pulsa, koristi se za kontrolu svjetline LED dioda, brzine motora itd."
        ],
        correct: "PWM (Pulse Width Modulation) mijenja širinu pulsa, koristi se za kontrolu svjetline LED dioda, brzine motora itd."
    },
    {
        question: "ŠTO JE ARDUINO BOOTLOADER I KOJA JE NJEGOVA FUNKCIJA?",
        answers: [
            "Mali program u mikrokontroleru koji omogućava učitavanje novog koda preko serijske veze bez vanjskog programatora."
        ],
        correct: "Mali program u mikrokontroleru koji omogućava učitavanje novog koda preko serijske veze bez vanjskog programatora."
    },
    {
        question: "KOJA JE RAZLIKA IZMEĐU GLOBALE I LOKALNE VARIJABLE U C++ (ARDUINO) PROGRAMIRANJU?",
        answers: [
            "Globalne varijable su dostupne svugdje, lokalne samo unutar funkcije u kojoj su definirane."
        ],
        correct: "Globalne varijable su dostupne svugdje, lokalne samo unutar funkcije u kojoj su definirane."
    },
    {
        question: "KOJI JE NAJVEĆI BROJ KOJI SE MOŽE ZAPISATI U 8-BITNOM REGISTRU BEZ PREDZNAKA?",
        answers: [
            "255"
        ],
        correct: "255"
    },
    {
        question: "KOJI JE NAJMANJI BROJ KOJI SE MOŽE ZAPISATI U 8-BITNOM REGISTRU S PREDZNAKOM?",
        answers: [
            "-128"
        ],
        correct: "-128"
    },
    {
        question: "KOJI JE NAJVEĆI BROJ KOJI SE MOŽE ZAPISATI U 8-BITNOM REGISTRU S PREDZNAKOM?",
        answers: [
            "127"
        ],
        correct: "127"
    },
    {
        question: "NA MIKROKONTROLER JE SPOJENA LED DIODA NA PIN 13. UZ OVAKO NAPISANI PROGRAM ŠTO ĆE SE DOGODITI KADA GA POKRENEMO? (Pitanje se odnosi na sliku programa)",
        answers: [
            "LED dioda će se upaliti bijelo."
        ],
        correct: "LED dioda će se upaliti bijelo."
    },
    {
        question: "U ČEMU ISKAZUJEMO ELEKTRIČNU STRUJU?",
        answers: [
            "Amper (A)"
        ],
        correct: "Amper (A)"
    },
    {
        question: "U ČEMU ISKAZUJEMO KAPACITET KONDENZATORA?",
        answers: [
            "Farad (F)"
        ],
        correct: "Farad (F)"
    },
    {
        question: "U ČEMU ISKAZUJEMO ELEKTRIČNI NABOJ (KOLIČINU ELEKTRICITETA)?",
        answers: [
            "Coulomb (C)"
        ],
        correct: "Coulomb (C)"
    },
    {
        question: "NA MIKROKONTROLER SU SPOJENE LED DIODE PREKO OTPORNIKA NA PINOVE 2, 3 I 4. UZ OVAKO NAPISANI PROGRAM KOJE LED DIODE ĆE SVIJETLITI KADA POKRENEMO PROGRAM: (Pitanje se odnosi na sliku programa)",
        answers: [
            "Sve tri će biti ugašene."
        ],
        correct: "Sve tri će biti ugašene."
    },
    {
        question: "KADA PARALELNO SPOJIMO OTPORNIKE NJIHOVA UKUPNA VRIJEDNOST JE JEDNAKA?",
        answers: [
            "Ukupnom recipročnom zbroju vrijednosti, pa sve to s 1/X."
        ],
        correct: "Ukupnom recipročnom zbroju vrijednosti, pa sve to s 1/X."
    },
    {
        question: "KAKO NAZIVAMO MATERIJALE KOJI DOZVOLJAVAJU KRETANJE SLOBODNIH ELEKTRONA?",
        answers: [
            "Vodiči"
        ],
        correct: "Vodiči"
    },
    {
        question: "KAKO NAZIVAMO MATERIJALE KOJI MIJENJAJU SVOJA SVOJSTVA IZ VODIČA U IZOLATORE I OBRNUTO U OVISNOSTI O ODREĐENIM UVJETIMA?",
        answers: [
            "Poluvodiči"
        ],
        correct: "Poluvodiči"
    },
    {
        question: "Koja znamenka će se prikazati na 7-segmentnom indikatoru ako 7-segmentni kod ima sljedeću kombinaciju A=0; B=1; C=1; D=0; E=0; F=1; G=1?",
        answers: [
            "0",
            "2",
            "3",
            "5",
            "7",
            "4"
        ],
        correct: "3"
    },
    {
        question: "Element čiji je simbol prikazan na slici je:",
        answers: [
            "Dekoder",
            "Potpuno zbrajalo",
            "Multipleksor",
            "Poluzbrajalo",
            "ROM"
        ],
        correct: "Poluzbrajalo" // Pretpostavljeno na temelju simbola, jer slika nije vidljiva.
    },
    {
        question: "Permanentna memorija realizirana MOSFET tehnologijom prikazana je na slici. O koliko se memorije radi?",
        answers: [
            "2x4",
            "4x4",
            "4x5",
            "5x5",
            "2x5"
        ],
        correct: "4x4" // Pretpostavljeno na temelju slike, jer slika nije vidljiva.
    },
    {
        question: "Koja znamenka će se prikazati na 7-segmentnom indikatoru ako 7-segmentni kod ima sljedeću kombinaciju A=1, B=1; C=1; D=1; E=0; F=0; G=1?",
        answers: [
            "6",
            "5",
            "8",
            "1",
            "3"
        ],
        correct: "8"
    },
    {
        question: "Kojom od tablica kombinacija se ostvaruje sljedeći kombinacijski logički sklop: MUX 8/1",
        answers: [
            "ABCD 0000", // Ova i sljedeće opcije su nejasne bez potpune tablice
            "ABCOZ 000",
            "ABC Diz",
            "Ništa od navedenog"
        ],
        correct: "Ništa od navedenog" // Bez pune tablice nije moguće točno odgovoriti.
    },
    {
        question: "Element čiji je simbol prikazan na slici je: (Odnosi se na sliku logičkih vrata)",
        answers: [
            "XOR",
            "NAND",
            "NOR",
            "NOT",
            "AND"
        ],
        correct: "XOR" // Pretpostavljeno na temelju uobičajenih simbola logičkih vrata.
    },
    {
        question: "Element čiji je simbol prikazan na slici je: (Odnosi se na sliku logičkih vrata)",
        answers: [
            "AND",
            "XOR",
            "NOT",
            "NOR",
            "NAND"
        ],
        correct: "AND" // Pretpostavljeno na temelju uobičajenih simbola logičkih vrata.
    },
    {
        question: "Koja znamenka će se prikazati na 7-segmentnom indikatoru ako 7-segmentni kod ima sljedeću kombinaciju A=1; B=1; C=1; D=1; E=1; F=1; G=0?",
        answers: [
            "6",
            "5",
            "8",
            "1",
            "0"
        ],
        correct: "0"
    },
    {
        question: "Element čiji je simbol prikazan na slici je: (Odnosi se na sliku logičkih vrata)",
        answers: [
            "NAND",
            "XOR",
            "NOT",
            "NOR",
            "AND"
        ],
        correct: "NOT" // Pretpostavljeno na temelju uobičajenih simbola logičkih vrata.
    },
    {
        question: "Koja znamenka će se prikazati na 7-segmentnom indikatoru ako 7-segmentni kod ima sljedeću kombinaciju A=1; B=1; C=1; D=0; E=0; F=1; G=1?",
        answers: [
            "6",
            "5",
            "9",
            "1",
            "3"
        ],
        correct: "9"
    },
    {
        question: "Element čiji je simbol prikazan na slici je: (Odnosi se na sliku logičkih vrata)",
        answers: [
            "XOR",
            "NAND",
            "NOT",
            "NOR",
            "AND"
        ],
        correct: "NAND" // Pretpostavljeno na temelju uobičajenih simbola logičkih vrata.
    },
    {
        question: "Koja znamenka će se prikazati na 7-segmentnom indikatoru ako 7-segmentni kod ima sljedeću kombinaciju A=1; B=0; C=0; D=1; E=1; F=0; G=1?",
        answers: [
            "6",
            "2",
            "8",
            "1",
            "3"
        ],
        correct: "2"
    },
    {
        question: "Koja znamenka će se prikazati na 7-segmentnom indikatoru ako 7-segmentni kod ima sljedeću kombinaciju A=0; B=0; C=1; D=0; E=0; F=1; G=0?",
        answers: [
            "6",
            "2",
            "8",
            "1",
            "3"
        ],
        correct: "1"
    },
    {
        question: "Koji od navedenih sklopova je bistabil?",
        answers: [
            "Sklop prikazan na slici.", // Pitanje se odnosi na sliku, ovdje je samo tekstualni opis
            "Niti jedan od navedenih."
        ],
        correct: "Sklop prikazan na slici." // Pretpostavljeno na temelju konteksta, jer slika nije dostupna
    },
    {
        question: "Memorijski element čiji je simbol prikazan na slici je:",
        answers: [
            "JK bistabil",
            "RS bistabil",
            "D bistabil",
            "T bistabil",
            "ništa od navedenog"
        ],
        correct: "D bistabil" // Pretpostavljeno na temelju simbola, jer slika nije vidljiva.
    },
    {
        question: "Koji su točni ulazi na JK bistabilu za preklapanje (toggle)?",
        answers: [
            "J=1, K=0",
            "J=0, K=1",
            "J=1, K=1",
            "J=0, K=0",
            "ništa od navedenog"
        ],
        correct: "J=1, K=1"
    },
    {
        question: "Memorijski element čiji je simbol prikazan na slici je:",
        answers: [
            "JK bistabil",
            "RS bistabil",
            "D bistabil",
            "T bistabil",
            "ništa od navedenog"
        ],
        correct: "JK bistabil" // Pretpostavljeno na temelju simbola, jer slika nije vidljiva.
    },
    {
        question: "Memorijski element čiji je simbol prikazan na slici je:",
        answers: [
            "JK bistabil",
            "RS bistabil",
            "D bistabil",
            "T bistabil",
            "ništa od navedenog"
        ],
        correct: "T bistabil" // Pretpostavljeno na temelju simbola, jer slika nije vidljiva.
    },
    {
        question: "Memorijski element čiji je simbol prikazan na slici je:",
        answers: [
            "JK bistabil",
            "RS bistabil",
            "D bistabil",
            "T bistabil",
            "ništa od navedenog"
        ],
        correct: "RS bistabil" // Pretpostavljeno na temelju simbola, jer slika nije vidljiva.
    },
    {
        question: "Registri su sekvencijski logički sklopovi namijenjeni za:",
        answers: [
            "Pohranjivanje višebitnih podataka",
            "Izvršavanje aritmetičkih operacija",
            "Generiranje taktnih impulsa",
            "Pretvaranje koda",
            "Uspoređivanje podataka",
            "ništa od navedenog"
        ],
        correct: "Pohranjivanje višebitnih podataka"
    },
    {
        question: "Koja je glavna razlika između serijskog i paralelnog registra?",
        answers: [
            "Serijski upis i ispis podataka s mehanizmom pomicanja, paralelni omogućuju istovremeni pristup svim bitovima.",
            "Serijski su brži od paralelnih.",
            "Paralelni koriste manje bistabila.",
            "Serijski registri se ne mogu koristiti za spremanje podataka.",
            "Nema razlike."
        ],
        correct: "Serijski upis i ispis podataka s mehanizmom pomicanja, paralelni omogućuju istovremeni pristup svim bitovima."
    },
    {
        question: "Johnsonovo brojilo, koje se postiže povratnom vezom s izlaza posmačnog registra na ulaz ($D_0 = \\bar{Q}_{n-1}$), omogućava povećanje broja stanja za dani broj bistabila na:",
        answers: [
            "$2n$",
            "$n^2$",
            "$2^n$",
            "$n$",
            "Nijedan odgovor nije točan."
        ],
        correct: "$2n$"
    },
    {
        question: "Koji je osnovni element za izgradnju posmačnog registra?",
        answers: [
            "Multipleksor",
            "Dekoder",
            "Flip-flop (bistabil)",
            "Aritmetičko-logička jedinica (ALU)",
            "Brojilo"
        ],
        correct: "Flip-flop (bistabil)"
    },
    {
        question: "U kojoj se memoriji podaci zadržavaju i kada nema napajanja?",
        answers: [
            "Volatile memorija",
            "SRAM",
            "Nepostojana memorija",
            "Postojana (non-volatile) memorija",
            "DRAM"
        ],
        correct: "Postojana (non-volatile) memorija"
    },
    {
        question: "Kapacitet memorije se izražava kao umnožak broja adresnih bitova 'n' i broja bitova izlazne riječi 'b' na sljedeći način:",
        answers: [
            "$C = n \\times b$",
            "$C = 2^n$",
            "$C = 2^n \\times b$",
            "$C = n + b$",
            "$C = 2^b$"
        ],
        correct: "$C = 2^n \\times b$"
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
    },
    {
        question: "Od kojeg do kojeg binarnog broja broji brojilo sa slike? (Pitanje se odnosi na sliku brojila)",
        answers: [
            "0-0", // Ove opcije su nejasne bez slike
            "0-2",
            "0-3",
            "0-1",
            "Ništa od navedenoga"
        ],
        correct: "Ništa od navedenoga" // Nije moguće odgovoriti bez slike.
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
