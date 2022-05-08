let previousSymbol;
let currentSymbol;
for (let i = 0; i < listOfButtons.length; i++) {
  let el = listOfButtons[i];
  el.addEventListener("mousedown", () => {
    el.classList.add("click");
  });
  el.addEventListener("mouseup", () => {
    el.classList.remove("click");
  });
  el.addEventListener("click", () => {
    currentSymbol = el.id;
    if (el.classList.contains("caps")) {
      caps = !caps;
      shift = caps;
    }
    if (el.classList.contains("backspace")) {
      inputForm.textContent = inputForm.textContent.slice(
        0,
        inputForm.textContent.length - 1
      );
    }
    if (
      el.classList.contains("shift-left") ||
      el.classList.contains("shift-right")
    ) {
      shift = !shift;
      if (shift) {
        el.classList.add("click");
      } else {
        el.classList.remove("click");
      }
    }
    if (lang == "en") {
      if (shift == false) {
        let symbol = el.getAttribute("data-text-unshift-en");
        if (symbol != null) {
          inputForm.textContent += symbol;
        }
      } else {
        let symbol = el.getAttribute("data-text-shift-en");
        if (symbol != null) {
          inputForm.textContent += symbol;
        }
        if (
          caps == false &&
          symbol != null &&
          !el.classList.contains("space")
        ) {
          shift = false;
          document.querySelector(".shift-left").classList.remove("click");
          document.querySelector(".shift-right").classList.remove("click");
        }
      }
    }
    if (lang == "ru") {
      if (shift == false) {
        let symbol = el.getAttribute("data-text-unshift-ru");
        if (symbol != null) {
          inputForm.textContent += symbol;
        }
      } else {
        let symbol = el.getAttribute("data-text-shift-ru");
        if (symbol != null) {
          inputForm.textContent += symbol;
        }
        if (
          (caps == false &&
            symbol != null &&
            !el.classList.contains("space")) ||
          currentSymbol == "alt-left" ||
          currentSymbol == "alt-right"
        ) {
          shift = false;
          document.querySelector(".shift-left").classList.remove("click");
          document.querySelector(".shift-right").classList.remove("click");
        }
      }
    }
    if (
      (previousSymbol == "shift-left" || previousSymbol == "shift-right") &&
      currentSymbol == "alt-left" ||
      currentSymbol == "alt-right"
    ) {
      if (lang == 'en') {
        lang = 'ru'
      } else {
        lang = 'en';
      }
      switchLanguage();
    }
    previousSymbol = el.id;
  });
}
