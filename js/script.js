const $form = document.querySelector("form");
$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#name")) {
    const $nameV = document.querySelector("#name");
    const $nameC = document.querySelector(".cName");
    $nameV.value === ""
      ? ($nameC.textContent = "Jane Appleseed")
      : ($nameC.textContent = $nameV.value);
  }

  if (e.target.matches("#cNumber")) {
    const $numberV = document.querySelector("#cNumber");
    const $numberC = document.querySelector(".cardN");
    $numberV.value === ""
      ? ($numberC.textContent = "0000 0000 0000 0000")
      : ($numberC.textContent = $numberV.value);
  }

  if (e.target.matches("#month")) {
    const $monthV = document.querySelector("#month");
    const $monthC = document.querySelector(".cDate");
    if ($monthV.value === "") {
      let month = $monthC.textContent.split("/");
      month[0] = "00";
      month = month.join("/");
      $monthC.textContent = month;
    } else {
      let month = $monthC.textContent.split("/");
      month[0] = $monthV.value;
      month = month.join("/");
      $monthC.textContent = month;
    }
  }

  if (e.target.matches("#year")) {
    const $yearV = document.querySelector("#year");
    const $yearC = document.querySelector(".cDate");
    if ($yearV.value === "") {
      let month = $yearC.textContent.split("/");
      month[1] = "00";
      month = month.join("/");
      $yearC.textContent = month;
    } else {
      let month = $yearC.textContent.split("/");
      month[1] = $yearV.value;
      month = month.join("/");
      $yearC.textContent = month;
    }
  }

  if (e.target.matches("#cvc")) {
    console.log("hola");
    const $cvcV = document.querySelector("#cvc");
    const $cvcC = document.querySelector(".cvcBC");
    $cvcV.value === ""
      ? ($cvcC.textContent = "000")
      : ($cvcC.textContent = $cvcV.value);
  }
});