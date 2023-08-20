window.scrollTo(0, 0);
//Sorry for bad code :(
const isValidUrl = (urlString) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};
const scrollToElement = (element, duration) => {
  const targetPosition = element.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const scrollProgress = easeInOutCubic(
      elapsedTime,
      startPosition,
      distance,
      duration
    );
    window.scrollTo(0, scrollProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(scrollAnimation);
};

const scrollToPosition = (targetPosition, duration) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const scrollProgress = easeInOutCubic(
      elapsedTime,
      startPosition,
      distance,
      duration
    );
    window.scrollTo(0, scrollProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(scrollAnimation);
};

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
var lastScroll = 0;
window.onscroll = function () {
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  const letterO = document.getElementById("letter-o");
  if (currentScroll > 0 && lastScroll <= currentScroll) {
    lastScroll = currentScroll;
    if (lastScroll > 1802) {
      if (letterO.getAttribute("data-index") != "down") {
        letterO.setAttribute("data-index", "down");
      }
    }
  } else {
    lastScroll = currentScroll;
    if (lastScroll < 2620) {
      if (letterO.getAttribute("data-index") != "up") {
        letterO.setAttribute("data-index", "up");
      }
    }
  }
};

window.onload = function () {
  document.getElementById("body").setAttribute("data-loader", "false");

  const changeButtton = document.getElementById("change-color");
  const copyPreorder = document.getElementById("copy-preorder");
  const arrowPreorder = document.getElementById("arrow-preorder");
  const preorderButtton = document.getElementById("preorder");
  const changeBg = document.getElementById("change-bg");
  const hatBlack = document.getElementById("hat-black");
  const hatWhite = document.getElementById("hat-white");
  const hatGreen = document.getElementById("hat-green");
  const changeNfc = document.getElementById("change-nfc");
  const copyChangeBottom = document.getElementById("change-copy-bottom");
  const radioOne = document.getElementById("radio-1");
  const radioThree = document.getElementById("radio-3");
  const radioFour = document.getElementById("radio-4");
  const copyNumberOne = document.getElementById("copy-number-one");
  const copyNumberTwo = document.getElementById("copy-number-two");
  const oneError = document.getElementById("copy-number-one-error");
  const twoError = document.getElementById("copy-number-two-error");
  const twoErrorValid = document.getElementById("copy-number-two-error-valid");
  //const madeBy = document.getElementById("made-by");
  const textOn = document.querySelector(".on");
  const scrollOneA = document.querySelector(".scrolldown");
  const scrollOneB = document.querySelector(".downarrows");

  if (window.matchMedia("(min-width: 1200px)").matches) {
    textOn.setAttribute("x", "350");
  }

  radioOne.checked = false;
  radioThree.checked = false;
  radioFour.checked = false;
  document.getElementById("url").value = "";

  //madeBy.onclick = function () {
  //window.open(
  //"https://api.whatsapp.com/send?phone=573193888291&text=Hi%2C%20I%20saw%20the%20website%20you%20made%20with%20MOS"
  //    );
  //  };
  scrollOneA.onclick = function () {
    scrollToPosition(1010, 1000);
  };
  scrollOneB.onclick = function () {
    scrollToPosition(1010, 1000);
  };

  copyPreorder.onclick = function () {
    scrollToPosition(2025, 1000);
  };
  arrowPreorder.onclick = function () {
    scrollToPosition(2025, 1000);
  };

  preorderButtton.onclick = function () {
    if (document.querySelector('input[name="group"]:checked')) {
      oneError.setAttribute("data-error", "hidden");
      copyNumberOne.setAttribute("data-error", "false");

      if (document.getElementById("url").value) {
        twoError.setAttribute("data-error", "hidden");
        twoErrorValid.setAttribute("data-error", "hidden");
        copyNumberTwo.setAttribute("data-error", "false");

        if (isValidUrl(document.getElementById("url").value)) {
          switch (document.querySelector('input[name="group"]:checked').value) {
            case "black":
              window.open(
                "https://www.themosbrand.com/product-page/black-velvet-reversible-bucket-hat-with-nfc-tag?url=" +
                  document.getElementById("url").value,
                "_blank"
              );
              break;
            case "white":
              window.open(
                "https://www.themosbrand.com/product-page/white-velvet-reversible-bucket-hat-with-nfc-tag?url=" +
                  document.getElementById("url").value,
                "_blank"
              );
              break;
            case "green":
              window.open(
                "https://www.themosbrand.com/product-page/green-velvet-reversible-bucket-hat-with-nfc-tag?url=" +
                  document.getElementById("url").value,
                "_blank"
              );
              break;
          }
        } else {
          copyNumberTwo.setAttribute("data-error", "true");
          twoErrorValid.setAttribute("data-error", "show");
        }
      } else {
        scrollToPosition(1970, 1000);
        copyNumberTwo.setAttribute("data-error", "true");
        twoError.setAttribute("data-error", "show");
      }
    } else {
      scrollToPosition(1870, 1000);
      copyNumberOne.setAttribute("data-error", "true");
      oneError.setAttribute("data-error", "show");
    }
  };

  changeButtton.onclick = function () {
    const color = changeButtton.getAttribute("data-change");
    switch (color) {
      case "black":
        changeButtton.setAttribute("data-change", "white");
        changeBg.setAttribute("data-change", "white");
        copyChangeBottom.setAttribute("data-change", "white");
        changeNfc.setAttribute("data-change", "white");
        copyPreorder.setAttribute("data-change", "white");
        arrowPreorder.setAttribute("data-change", "white");
        hatBlack.classList.add("hidden");
        hatWhite.classList.remove("hidden");
        break;
      case "white":
        changeButtton.setAttribute("data-change", "green");
        changeBg.setAttribute("data-change", "green");
        copyChangeBottom.setAttribute("data-change", "green");
        changeNfc.setAttribute("data-change", "green");
        copyPreorder.setAttribute("data-change", "green");
        arrowPreorder.setAttribute("data-change", "green");
        hatWhite.classList.add("hidden");
        hatGreen.classList.remove("hidden");
        break;
      case "green":
        changeButtton.setAttribute("data-change", "black");
        changeBg.setAttribute("data-change", "black");
        copyChangeBottom.setAttribute("data-change", "black");
        changeNfc.setAttribute("data-change", "black");
        copyPreorder.setAttribute("data-change", "black");
        arrowPreorder.setAttribute("data-change", "black");
        hatGreen.classList.add("hidden");
        hatBlack.classList.remove("hidden");
        break;
    }
  };

  lax.init();

  lax.addDriver(
    "scrollY",
    function () {
      return document.documentElement.scrollTop;
    },
    { frameStep: 1 }
  );

  lax.addElements(".letter-m", {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, 800],
      ],
      opacity: [
        [0, "screenHeight/2"],
        [1, 0],
      ],
    },
  });
  lax.addElements(".letter-o", {
    scrollY: {
      translateY: [
        [-400, 0, 100],
        [300, 0, 100],
      ],
      scale: [
        [100, "screenHeight"],
        [0.25, 10],
      ],
      opacity: [
        [0, "screenHeight/2", "screenHeight"],
        [1, 1, 0],
      ],
    },
  });
  lax.addElements(".letter-s", {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, -800],
      ],
      opacity: [
        [0, "screenHeight/2"],
        [1, 0],
      ],
    },
  });
  lax.addElements(".copy", {
    scrollY: {
      scale: [
        [0, "screenHeight/2"],
        [1, 0],
      ],
      opacity: [
        [0, "screenHeight/3"],
        [1, 0],
      ],
    },
  });
  lax.addElements(".home-copy", {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, -1000],
      ],
      opacity: [
        [0, "screenHeight/2"],
        [1, 0],
      ],
    },
  });

  lax.addElements(".scrolldown", {
    scrollY: {
      translateY: [
        [0, 200],
        [0, 200],
      ],
      opacity: [
        [0, 200],
        [1, 0],
      ],
    },
  });
  lax.addElements(".downarrows img", {
    scrollY: {
      translateY: [
        [0, 200],
        [0, 200],
      ],
      opacity: [
        [0, 200],
        [1, 0],
      ],
    },
  });

  lax.addElements(".nfc-bucket-hat", {
    scrollY: {
      translateX: [
        ["screenHeight-700", "screenHeight"],
        [-1000, 0],
      ],
    },
  });

  lax.addElements("#change-color", {
    scrollY: {
      scale: [
        ["screenHeight-600", "screenHeight"],
        [0, 1],
      ],
    },
  });

  lax.addElements("#change-copy-bottom", {
    scrollY: {
      rotate: [
        ["screenHeight-500", "screenHeight"],
        [100, 0],
      ],
    },
  });

  if (window.matchMedia("(max-width: 600px)").matches) {
    lax.addElements(".hat", {
      scrollY: {
        scale: [
          [100, "screenHeight/2", "screenHeight"],
          [0, 0.8, 1],
        ],
        translateY: [
          [100, "screenHeight/2", "screenHeight"],
          [-600, -100, 160],
        ],
      },
    });
  } else {
    lax.addElements(".hat", {
      scrollY: {
        scale: [
          [100, "screenHeight/2", "screenHeight"],
          [0, 0.5, 1],
        ],
        translateY: [
          [100, "screenHeight/2", "screenHeight"],
          [-500, -100, 160],
        ],
      },
    });
  }

  lax.addElements("#arrow-preorder", {
    scrollY: {
      translateY: [
        ["screenHeight+screenHeight-1200", "screenHeight+screenHeight-100"],
        [0, 200],
      ],
      opacity: [
        ["screenHeight+screenHeight-1200", "screenHeight+screenHeight-100"],
        [1, 0],
      ],
    },
  });

  lax.addElements("#container-one", {
    scrollY: {
      translateX: [
        ["screenHeight+screenHeight-800", "screenHeight+screenHeight-100"],
        [-1000, 0],
      ],
    },
  });

  lax.addElements("#container-two", {
    scrollY: {
      translateX: [
        ["screenHeight+screenHeight-600", "screenHeight+screenHeight-100"],
        [+1000, 0],
      ],
    },
  });

  lax.addElements("#container-three", {
    scrollY: {
      translateX: [
        ["screenHeight+screenHeight-400", "screenHeight+screenHeight-100"],
        [-1000, 0],
      ],
    },
  });

  lax.addElements("#preorder", {
    scrollY: {
      scale: [
        ["screenHeight+screenHeight-100", "screenHeight+screenHeight"],
        [0, 1],
      ],
    },
  });

  lax.addElements("#parrot-mobile", {
    scrollY: {
      opacity: [
        ["screenHeight+screenHeight-800", "screenHeight+screenHeight-100"],
        [0, 1],
      ],
    },
  });
};
