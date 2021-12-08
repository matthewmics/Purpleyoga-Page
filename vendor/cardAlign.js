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

(function () {
  waitAllImages(document.querySelector(".container"), function () {
    setTimeout(() => {
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
    }, 1250);
  });
})();

function waitAllImages(element, callback) {
  var allImgsLength = 0;
  var allImgsLoaded = 0;
  var allImgs = [];

  var filtered = Array.prototype.filter.call(
    element.querySelectorAll("img"),
    function (item) {
      if (item.src === "") {
        return false;
      }

      // Firefox's `complete` property will always be `true` even if the image has not been downloaded.
      // Doing it this way works in Firefox.
      var img = new Image();
      img.src = item.src;
      return !img.complete;
    }
  );

  filtered.forEach(function (item) {
    allImgs.push({
      src: item.src,
      element: item,
    });
  });

  allImgsLength = allImgs.length;
  allImgsLoaded = 0;

  // If no images found, don't bother.
  if (allImgsLength === 0) {
    callback.call(element);
  }

  allImgs.forEach(function (img) {
    var image = new Image();

    // Handle the image loading and error with the same callback.
    image.addEventListener("load", function () {
      allImgsLoaded++;

      if (allImgsLoaded === allImgsLength) {
        callback.call(element);
        return false;
      }
    });

    image.src = img.src;
  });
}
