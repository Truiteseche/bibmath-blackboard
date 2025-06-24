
function cardcoursManagament() {
    const cardcours = document.querySelector(".cardcours");
    let cardcoursCopy = null;
    if (cardcours !== null) {
        cardcoursCopy = cardcours.cloneNode(true);
        const aside = document.querySelector("aside#droite");
        if (aside !== null) {
            function toggleCardcours() {
                cardcoursCopy.children[0].classList.toggle("activecours");
                let display = cardcoursCopy.children[1].style.display;
                cardcoursCopy.children[1].style.display = display === "block" ? "none" : "block";
            }
            cardcoursCopy.children[0].addEventListener("click", () => {
                toggleCardcours();
            })
            toggleCardcours();
            aside.appendChild(cardcoursCopy);
        }
    }

    document.addEventListener("scroll", () => {
        let pubdroite = document.getElementById("pubdroite");
        if (pubdroite !== null) {
            pubdroite.classList.toggle("fixedpub", false);
        }

        if (cardcoursCopy !== null) {
            cardcoursCopy.classList.toggle("fixedpub", window.scrollY >= 440);
        }
    });
}

if (!(new URL(document.location.href).searchParams.get("quoi").includes("/index"))) {
    cardcoursManagament();
}

