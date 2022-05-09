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

    if (el.classList.contains("tab")) {
      inputForm.value += "\t";
    }
    if (el.classList.contains("enter")) {
      inputForm.value += "\n";
    }

    if (el.classList.contains("caps")) {
      caps = !caps;
      shift = caps;
    }
    if (el.classList.contains("backspace")) {
      inputForm.value = inputForm.value.slice(0, inputForm.value.length - 1);
    }
    if (
      el.classList.contains("shift-left") ||
      el.classList.contains("shift-right")
    ) {
      shift = !shift;
      if (shift) {
        el.classList.add("click");
        el.querySelector(".virtual-keyboard__bottom").classList.add("press");
      } else {
        el.querySelector(".virtual-keyboard__bottom").classList.remove("press");
        el.classList.remove("click");
      }
    }
    if (lang == "en") {
      if (shift == false) {
        let symbol = el.getAttribute("data-text-unshift-en");
        if (symbol != null) {
          inputForm.value += symbol;
        }
      } else {
        let symbol = el.getAttribute("data-text-shift-en");
        if (symbol != null) {
          inputForm.value += symbol;
        }
      }
    }
    if (lang == "ru") {
      if (shift == false) {
        let symbol = el.getAttribute("data-text-unshift-ru");
        if (symbol != null) {
          inputForm.value += symbol;
        }
      } else {
        let symbol = el.getAttribute("data-text-shift-ru");
        if (symbol != null) {
          inputForm.value += symbol;
        }
      }
    }
    if (
      ((previousSymbol == "shiftleft" || previousSymbol == "shiftright") &&
        currentSymbol == "altleft") ||
      currentSymbol == "altright"
    ) {
      if (lang == "en") {
        lang = "ru";
      } else {
        lang = "en";
      }
      switchLanguage();
    }
    previousSymbol = el.id;
  });
}
