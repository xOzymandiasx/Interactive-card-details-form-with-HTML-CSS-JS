const $cardNumber = document.querySelector(".cardN");
const $cardValue = document.querySelector("#cNumber");
const $form = document.querySelector("form");
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const $cardValue = document.querySelector("#cNumber");
  console.log($cardValue.value);
});

$cardValue.addEventListener("keyup", (e) => {
    $cardNumber.textContent = $cardValue.value;
    if ($cardNumber.textContent === "") {
        $cardNumber.textContent = "0000 0000 0000 0000"
    }
});
