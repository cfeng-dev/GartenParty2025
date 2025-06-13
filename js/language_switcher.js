// Translation data for demo
const translations = {
    de: {
        home: "Home",
        about: "Über uns",
        location: "Ort & Anfahrt",
        // ... alle weiteren Texte
    },
    en: {
        home: "Home",
        about: "About Us",
        location: "Location",
        // ... alle weiteren Texte
    },
};

// Function to update menu text
function switchLanguage(lang) {
    document.querySelector('a[href="index.html"]').textContent = translations[lang].home;
    document.querySelector('a[href="ueber_uns.html"]').textContent = translations[lang].about;
    document.querySelector('a[href="ort_und_anfahrt.html"]').textContent = translations[lang].location;
    // ... und so weiter für alle anderen Texte auf der Seite!
}

// Event listener für Sprach-Buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        switchLanguage(this.dataset.lang);
    });
});
