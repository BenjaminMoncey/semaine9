$liste = document.getElementById("liste");
$nom = document.getElementById("nom");
$prenom = document.getElementById("prenom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$supprimer = document.getElementById("supprimer");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$resultats = document.getElementById("resultats");

personnes = [{
    prenom: "Alain",
    nom: "Dubois",
    numero: "0674215632"
}, {
    prenom: "Aline",
    nom: "Gautier",
    numero: "0632552330"
}, {
    prenom: "Pascal",
    nom: "Dupont",
    numero: "0639852331"
}, {
    prenom: "Pascaline",
    nom: "Bourboule",
    numero: "0678308856"
}];

function afficherListe() {
    elements = "";
    for (var i = 0; i < personnes.length; i++) {
        elements += "<li>" + personnes[i].prenom + " " + personnes[i].nom + " (" + personnes[i].numero + ")" + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    personnes.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}

function supprimer() {
    personnes.pop();
    afficherListe();
}

function rechercher () {
    elements = "";
    for (var i = 0; i < personnes.length; i++) {
        if ($recherche.value == personnes[i].nom) {
            elements += "<li>" + personnes[i].prenom + " " + personnes[i].nom + " (" + personnes[i].numero + ")" + "</li>";
        }
    }
    $resultats.innerHTML = elements;
}

$ajouter.onclick = ajouter;
afficherListe();
$supprimer.onclick = supprimer;

$rechercher.onclick = rechercher;
