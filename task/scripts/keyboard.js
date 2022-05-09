document.body.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (!e.repeat || e.code == "Backspace") {
    let key = e.code;
    let symbol = e.key;
    if (key.includes("Key")) {
      key = key.replace(/[K][e][y]/g, "");
      key = key.toLowerCase();
    }
    if (key.includes("Digit")) {
      key = key.replace(/Digit/g, "");
    }
    console.log(key);
    key = key.toLowerCase();
    if (document.getElementById(key) != null) {
      document.getElementById(key).classList.add("click");
      document.getElementById(key).click();
    }
  }
});

document.body.addEventListener("keyup", (e) => {
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    shift = false;
    document
      .querySelector(".virtual-keyboard__bottom.press")
      .classList.remove("press");
  }
  if (document.querySelector(".click") != null) {
    document.querySelector(".click").classList.remove("click");
  }
});
