
let slideIndex = 1;
    showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);// Denne funksjonen kalles når du trykker på pil-knappene (< eller >). Den tar imot et tall n
    // Trykker du "neste" (>), sendes n = 1, Trykker du "forrige" (<), sendes n = -1
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    //Denne kalles når du klikker på en av prikkene under bildene. 
    //Den setter slideIndex direkte til det tallet du klikket på (f.eks. prikk nr. 2 → viser bilde 2), 
    //i stedet for å telle opp/ned.
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");//Henter alle elementer med klassen mySlides (bildene) og dot (prikkene) fra om_arma_3.
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    //Dette gjør at karusellen går i loop: hvis du er på siste bilde og trykker "neste", hopper den tilbake 
    // til bilde 1. Hvis du er på bilde 1 og trykker "forrige", hopper den til siste bilde.
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    //Skjuler alle bildene først (setter display: none på alle).
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    //Fjerner active-klassen fra alle prikkene (så ingen prikk er markert som "valgt").
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    //Til slutt vises kun det riktige bildet (display: block), og riktig prikk får active-klassen tilbake (så den lyser opp
    //for å vise hvilket bilde du er på).

    //Kort oppsummert Koden viser ett bilde av gangen, skjuler resten, og lar deg bla mellom dem med piler eller prikker
    //— mens den holder styr på hvilket bilde som er "aktivt" via slideIndex.
}
