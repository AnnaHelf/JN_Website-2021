/* das sind mehrere items, mehrere divs denen du das id gibts, deshalb ALL */
let wareItem = document.querySelectorAll("#shopping");
/* du hast nur eine shoppingcard */
let shoppingCard = document.querySelector("#shopping_card");
/* variable wo wir die zahlen speichern */
let counter = 0;
/* da kommt später der counter rein */
const box = document.createElement("div");
/* damit du es im css stylen kannst */
box.classList.add("num");

/* function */

wareItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("ich funktioniere, hoffenlich");
    /* für jeden click plus eins */
    counter++;
    /* testen ob es richtig anzeigt */
    console.log(counter);

    /* wir fügen es an den richtigen platz */
    shoppingCard.appendChild(box);
    /* wir setzen den inhalt */
    box.innerHTML = counter;
  });
});
