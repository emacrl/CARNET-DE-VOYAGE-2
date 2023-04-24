let compteur = 0 // Je mets un compteur afin de voir la diapositive sur laquelle je suis.
let photos, slides, slideWidth

window.onload = () => {
    // Je récupère le conteneur principal du diaporama
    const diapo = document.querySelector(".diapo")

    // Ensuite, j'ai besoin de récupérer le conteneur de toutes mes images que j'ai nommé photos
    photos = document.querySelector(".photos")

    // Puis je fais la même chose en récupèrant un tableau contenant la liste des diapos
    slides = Array.from(photos.children)

    // Afin d'avoir un diaporama convenable, je calcule sa largeur visible.
    slideWidth = diapo.getBoundingClientRect().width

    // Maintenant, pour faire défiler mes diapos, je dois récupérer la flèche droite ainsi que la flèche gauche de mon HTML.
    //le let next correspond à ma flèche droite, cela me permettra de faire défiller mes diapos.
    //le let prev correspond donc à ma flèche gauche, cela me permettra d'aller en arrière dans le diaporama.
    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")

    // Ensuite, pour que les flèches fonctionnent, je dois les appeler avec "addEventListener".
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)


    // Je mets en oeuvre le responsive.
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
}


    //Cette fonction fait défiler le diaporama vers la droite. Tout en incrémentant le compteur.
 
function slideNext(){
    compteur++

    // Lorsque l'on arrive à la fin du diaporama, cette fonction permettra de renvoyer le lecteur à la diapo 1 donc au début.
    if(compteur == slides.length){
        compteur = 0
    }

    // Afin que les photos soient déffilées entièrement, je calcule la valeur de décalage de ces dernières.
    let decal = -slideWidth * compteur
    photos.style.transform = `translateX(${decal}px)`
}

    //J'applique cette fois-ci la même fonction mais pour faire défiler le diaporama vers la gauche. Tout en incrémentant le compteur.
 function slidePrev(){
    compteur--
 
}

    // Ici la fonction permet de repartir à la fin lorsque le début du diaporama est dépassé.
    if(compteur < 0){
        compteur = slides.length - 1
    }


