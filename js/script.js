const $cardNumber = document.querySelector(".cardN");
const $cardValue = document.querySelector("#cNumber");
const $form = document.querySelector("form");
$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#name")) {
    const $nameV = document.querySelector("#name");
    const $nameC = document.querySelector(".cName");
    $nameV.value === ""
      ? $nameC.textContent = "Jane Appleseed"
      : $nameC.textContent = $nameV.value;
  }
});

$cardValue.addEventListener("keyup", (e) => {
  $cardNumber.textContent = $cardValue.value;
  if ($cardNumber.textContent === "") {
    $cardNumber.textContent = "0000 0000 0000 0000";
  }
});
