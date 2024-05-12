const all_buttons = document.querySelectorAll('.buttons'),
  display = document.getElementById("disp");
let isResultDisplayed = false;

all_buttons.forEach(btn => btn.addEventListener('click', e => {
  const buttonText = e.target.innerHTML;
  isResultDisplayed = buttonText === '=' ? false : isResultDisplayed;
  display.value = buttonText === '=' ? (isResultDisplayed ? '' : eval(display.value))
    : display.value + buttonText;
  isResultDisplayed = buttonText === '=' ? true : isResultDisplayed;
}));