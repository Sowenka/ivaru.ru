const buttons = document.querySelector(".all-buttons"),
    cards = document.querySelectorAll(".gallery__card,.grid__card");
listCards = document.querySelectorAll(".filter-btn");
function filter() {
    buttons.addEventListener("click", (event) => {
        const targetID = event.target.dataset.id;
        const target = event.target;
        if (target.classList.contains("filter-btn")) {
            listCards.forEach((listCard) => listCard.classList.remove("active"));
            target.classList.add("active");
        }
        console.log(targetID);
        switch (targetID) {
            case "all":
                getItems("gallery__card");
                break;
            case "alll":
                getItems("grid__card");
                break;
            case "komod":
                getItems(targetID);
                break;
            case "shkaf":
                getItems(targetID);
                break;
            case "krovat":
                getItems(targetID);
                break;
            case "zerkalo":
                getItems(targetID);
                break;
            case "penal":
                getItems(targetID);
                break;
            case "trumo":
                getItems(targetID);
                break;
            case "tumb":
                getItems(targetID);
                break;
            case "ecco":
                getItems(targetID);
                break;
            case "velur":
                getItems(targetID);
                break;
            case "zhak":
                getItems(targetID);
                break;
            case "rogozh":
                getItems(targetID);
                break;
        }
    });
}
filter();
function getItems(className) {
    cards.forEach((card) => {
        if (card.classList.contains(className)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
