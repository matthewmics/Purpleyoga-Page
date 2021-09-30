function alignCard(row, isMob) {
  var cards = row.querySelectorAll(".row > .col");

  if (cards.length < 1) return;

  if (isMob) {
    cards.forEach((card) => {
      card.style.height = "auto";
      card.style.height = "auto";
    });
  } else {
    var baseCard = null;
    cards.forEach((card) => {
      if (card.classList.contains("card-base")) {
        baseCard = card;
      }
    });

    if (!baseCard) {
      cards.forEach((card) => {
        if (!baseCard) {
          baseCard = card;
        } else {
          if (card.clientHeight > baseCard.clientHeight) {
            baseCard = card;
          }
        }
      });

      baseCard.classList.add("card-base");
    }

    baseCard.style.height = "auto";
    cards.forEach((card) => {
      card.style.height = baseCard.clientHeight + "px";
    });
  }
}

setTimeout(() => {
  (function () {
    var rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      if (!row.classList.contains("noAlign"))
        alignCard(row, window.innerWidth <= 600);
    });

    window.addEventListener("resize", () => {
      rows.forEach((row) => {
        if (!row.classList.contains("noAlign"))
          alignCard(row, window.innerWidth <= 600);
      });
    });
  })();
}, 500);
