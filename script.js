// Les textes des boutons, dans chaque langue
const textes = {
  fr: { pdf: "Télécharger en PDF", sombre: "Mode sombre", clair: "Mode clair", langue: "EN" },
  en: { pdf: "Download PDF",      sombre: "Dark mode",   clair: "Light mode",  langue: "FR" }
};

let langue = "fr";

const btnPdf = document.getElementById("btn-pdf");
const btnMode = document.getElementById("btn-mode");
const btnLangue = document.getElementById("btn-langue");
const photo = document.querySelector(".photo");
const elementsTraduits = document.querySelectorAll("[data-en]");

// On met de côté le texte français d'origine
elementsTraduits.forEach(function (element) {
  element.dataset.fr = element.innerHTML;
});

// Écrit le texte des 3 boutons selon la langue et le mode
function mettreAJourBoutons() {
  const t = textes[langue];
  const estSombre = document.body.classList.contains("sombre");

  btnPdf.textContent = t.pdf;
  btnLangue.textContent = t.langue;

  if (estSombre) {
    btnMode.textContent = t.clair;
  } else {
    btnMode.textContent = t.sombre;
  }
}

// Affiche tout le CV dans la langue choisie
function appliquerLangue() {
  elementsTraduits.forEach(function (element) {
    if (langue === "en") {
      element.innerHTML = element.dataset.en;
    } else {
      element.innerHTML = element.dataset.fr;
    }
  });
  document.documentElement.lang = langue;
  mettreAJourBoutons();
}

// Bouton PDF
btnPdf.addEventListener("click", function () {
  window.print();
});

// Photo qui grossit
photo.addEventListener("click", function () {
  photo.classList.toggle("agrandie");
});

// Mode sombre : ne touche qu'à la classe et aux boutons
btnMode.addEventListener("click", function () {
  document.body.classList.toggle("sombre");
  mettreAJourBoutons();
});

// Changement de langue
btnLangue.addEventListener("click", function () {
  if (langue === "fr") {
    langue = "en";
  } else {
    langue = "fr";
  }
  appliquerLangue();
});