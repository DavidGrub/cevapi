function izracunajGodinu() {
    // Dohvati unesene godine iz input polja
    const godine = document.getElementById("broj").value;
    
    // Provjeri da li je unos ispravan
    if (godine) {
        // Izračunaj godinu rođenja prema formuli
        const godinaRodenja = 84 - godine + 1940;
        
        // Prikaži rezultat
        document.getElementById("rezultat").innerHTML = "Godina rođenja je: " + godinaRodenja;
    } else {
        document.getElementById("rezultat").innerHTML = "Molimo unesite broj godina.";
    }
}