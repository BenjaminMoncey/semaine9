$liste = document.getElementById("liste");
$supprimer = document.getElementById("supprimer");
$restaurer = document.getElementById("restaurer");



function supprimer() {
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("disappear");
        }
    }
}

function restaurer() {
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("disappear");
    }
}

function selectionne(e) {
    e.target.classList.toggle("selected");
}



$liste.onclick = selectionne;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;