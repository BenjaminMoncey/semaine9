$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter");
$supprimer = document.getElementById("supprimer")

var personnes = ["Alain", "Aline", "Pascal", "Pascaline", "Maud", "Gilbert", "Renée", "Didier"];

function afficherListe() {
    elements = "";
    for (var i = 0; i < personnes.length; i++) {
        elements += "<li>" + personnes[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    personnes.push($texte.value);
    afficherListe();
}

function supprimer() {
    personnes.pop($texte.value);
    afficherListe();
}

$ajouter.onclick = ajouter;
afficherListe();

$supprimer.onclick = supprimer;
afficherListe();