let numberDOM = document.querySelector(".number");
let numberValue = +numberDOM.innerText;

const countBtn = document.querySelector(".countBtn");

countBtn.addEventListener("click", () => {
  numberValue += 1;
  numberDOM.innerHTML = numberValue;
});
