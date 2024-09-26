// Välj alla navigationslänkar som leder till en sektion med ett ID
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Hindrar standardbeteendet (som är att direkt hoppa till sektionen)

        // Hämta det länkade elementet med ID från href-attributet
        const target = document.querySelector(this.getAttribute('href'));

        // Scrolla smidigt till det länkade elementet
        target.scrollIntoView({
            behavior: 'smooth'  // Ger en smidig övergång
        });
    });
});